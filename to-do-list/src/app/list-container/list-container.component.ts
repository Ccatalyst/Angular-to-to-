import { Component } from '@angular/core';
import { ToDoItem, ToDoList } from './todolist';
@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent {
  toDo: ToDoItem = {
    name: 'Take out Trash',
    creationDate: new Date(),
    description: 'Put it in the garbage',
    isDone: true,
  };
}
