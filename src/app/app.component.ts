import { Component } from '@angular/core';
import { Task } from './shared/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'todo';

  now: Date = new Date();
  period: number = this.now.getHours();
  greeting!: string;
  tasks: Task[]=[];
  taskInput:string=''
  constructor() {}

  ngOnInit() {
    this.getTimeData();
  }
  getTimeData() {
    switch (true) {
      case this.period >= 0 && this.period < 12:
        this.greeting = 'Morning 🌤️';
        break;
      case this.period >= 12 && this.period < 16:
        this.greeting = 'Afternoon ☀️';
        break;
      case this.period >= 16 && this.period < 19:
        this.greeting = 'Evening 🌇';
        break;
      case this.period >= 19 && this.period < 24:
        this.greeting = 'Evening 🌙';
        break;

      default:
        this.greeting = 'Morning';
    }
  }

  clearField(){
  this.taskInput=""
  }
  addTask(){
    this.tasks.push({
      
        id: Date.now(),
        data: this.taskInput,
        list: "OG",
        date: new Date().toLocaleString("en-IN"),
        priority: 0,
    })
    this.clearField();
    console.log(this.tasks);

  }

}
