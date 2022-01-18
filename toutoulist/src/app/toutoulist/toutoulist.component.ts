import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-toutoulist',
  templateUrl: './toutoulist.component.html',
  styleUrls: ['./toutoulist.component.scss']
})
export class ToutoulistComponent implements OnInit {

  title = 'ToutouList';

  newTask!: string;
  newTaskId!: 1;
  deleteTaskId!: number;

  constructor() { }

  ngOnInit(): void {
  }

  allTasks = [
    { id: 1, description: 'Premier Test', done: false },
  ];

   get tasks(){
     return this.allTasks
  };
  
  public addTask() {
    this.allTasks.push({id: this.newTaskId + 1 ,description: this.newTask, done: false});
  };

  public deleteTask(){
    this.allTasks.slice(this.deleteTaskId);
  };
}
