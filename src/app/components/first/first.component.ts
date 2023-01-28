import { Component } from '@angular/core';

export interface Record {
  id: number, name: string, checked: boolean, isReadOnly: boolean
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {

  constructor() {
    console.log('E gata componenta')
  }

  id = 0;

  toDoList: Record[] = [];

  buffer: string = ""

  addRecord() {
    let myRecord: Record = {
      id: this.id,
      name: this.buffer,
      checked: false,
      isReadOnly: true
    }
    this.toDoList.push(myRecord)
    this.id++;
    console.log(this.toDoList)
  }

  deleteRecord(id: number) {
    console.log(id);
    var removeIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList.splice(removeIndex, 1);
    console.log(this.toDoList);
  }

  updateRecord(id: number, button: HTMLButtonElement, content: string) {
    button.hidden = true;

    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList[searchedIndex].isReadOnly = true;

    this.toDoList[searchedIndex].name = content;

    console.log(this.toDoList);
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
}
