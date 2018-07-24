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
      "noOfToDos": 3
    },
    {
      "type": "Tomorrow",
      "noOfToDos": 1
    },
    {
      "type": "Work",
      "noOfToDos": 0
    },
    {
      "type": "Holiday",
      "noOfToDos": 0
    },
    {
      "type": "Shopping List",
      "noOfToDos": 0
    },
  ];


  ngOnInit() {
  }

}
