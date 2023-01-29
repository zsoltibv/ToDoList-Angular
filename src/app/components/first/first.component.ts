import { Component } from '@angular/core';

interface Record {
  id: number,
  name: string,
  isChecked: boolean,
  isReadOnly: boolean
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {

  id: number = 0;
  toDoList: Record[] = [];
  name: string = ""

  constructor() {
    console.log('E gata componenta')
    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", "0");
    } else {
      this.id = parseInt(localStorage.getItem("id") as string);
    }
  }

  ngOnInit(): void {
    for (const [key, value] of Object.entries(localStorage)) {
      if (key != "id") {
        this.toDoList.push(JSON.parse(value));
      }
    }
  }

  addRecord() {
    let myRecord: Record = {
      id: this.id,
      name: this.name,
      isChecked: false,
      isReadOnly: true
    }
    this.toDoList.push(myRecord)
    console.log(this.toDoList)

    localStorage.setItem(
      this.id.toString(),
      JSON.stringify(myRecord)
    );

    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", this.id.toString());
      this.id++;
    } else {
      this.id++;
      localStorage.setItem("id", this.id.toString());
    }
  }

  deleteRecord(id: number) {
    console.log(id);
    var removeIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList.splice(removeIndex, 1);
    console.log(this.toDoList);

    localStorage.removeItem(id.toString());
  }

  updateRecord(id: number, button: HTMLButtonElement, content: string) {
    button.hidden = true;

    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList[searchedIndex].isReadOnly = true;
    this.toDoList[searchedIndex].name = content;

    console.log(this.toDoList);

    localStorage.setItem(id.toString(), JSON.stringify(this.toDoList[searchedIndex]));
  }

  makeEditable(id: number) {
    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList[searchedIndex].isReadOnly = false;
  }

  makeVisible(button: HTMLButtonElement) {
    button.hidden = true;
  }

  onLostFocus(id: number, input: HTMLInputElement) {
    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    input.value = this.toDoList[searchedIndex].name;
    this.toDoList[searchedIndex].isReadOnly = true;
  }

  onCheckBox(id: number) {
    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    localStorage.setItem(id.toString(), JSON.stringify(this.toDoList[searchedIndex]));
  }

  countUncheckedElements(){
    return this.toDoList.map(item => item.isChecked).filter(isChecked => isChecked === false).length;
  }
}
