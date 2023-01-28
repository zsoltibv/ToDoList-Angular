import { Component } from '@angular/core';

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

  toDoList: { id: number, name: string, checked: boolean, isReadOnly: boolean }[] = [];

  buffer: string = ""

  addRecord() {
    this.toDoList.push({ "id": this.id, "name": this.buffer, "checked": false, "isReadOnly": true})
    this.id++;
    console.log(this.toDoList)
  }

  deleteRecord(id: number) {
    console.log(id);
    var removeIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList.splice(removeIndex, 1);
    console.log(this.toDoList);
  }

  updateRecord(id:number, button:HTMLButtonElement) {
    button.hidden = true;

    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList[searchedIndex].isReadOnly = true;
    console.log(this.toDoList);
  }

  makeEditable(id:number){
    var searchedIndex = this.toDoList.map(item => item.id).indexOf(id);
    this.toDoList[searchedIndex].isReadOnly = false;
  }

  makeVisible(button:HTMLButtonElement){
    button.hidden = true;
  }
}
