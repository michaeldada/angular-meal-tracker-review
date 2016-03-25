import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model'

@Component({//This component is special - it will hold our entire app. An Angular2 app is built with a tree of components. We have one component called the root component that is responsible for loading its child components, and each of them has their own child components. This way we break our app into manageable chunks.
  selector: 'my-app',
    directives: [TaskListComponent],
    template: `
      <div class="container">
        <h1>To-Do List</h1>
        <task-list
         [taskList]="tasks"
         (onTaskSelect)="taskWasSelected($event)">
        </task-list>
      <div>
    `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("More Breakfast Sandwiches", 2),
      new Task("Do the laundry", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}
