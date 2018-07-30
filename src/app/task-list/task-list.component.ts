import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  categoryList = [
    {
      "type": "Today",
      "noOfToDos": 3,
      "todo": {
      
      }
    },
    {
      "type": "Tomorrow",
      "noOfToDos": 1,
      "todo": {
      
      }
    },
    {
      "type": "Work",
      "noOfToDos": 0,
      "todo": {
      
      }
    },
    {
      "type": "Holiday",
      "noOfToDos": 0,
      "todo": {
      
      }
    },
    {
      "type": "Shopping List",
      "noOfToDos": 0,
      "todo": {
      
      }
    },
  ];

  newCategory = '';

  onKey(event: any) { // without type info
    console.log('CHANGE...',event.target.value)
    this.newCategory = event.target.value;
    console.log('CHANGE 2...',this.newCategory)
    
  }
  addCategory() {
    console.log('....CLICKED', this.newCategory);
    this.categoryList.push({'type': this.newCategory, 'noOfToDos': 0, 'todo': {}});
  }
  openToDo(event, todo) {
    console.log('open TODO')
  }

  ngOnInit() {
  }

}
