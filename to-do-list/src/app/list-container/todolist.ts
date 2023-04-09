export interface ToDoItem {
  name: string;
  creationDate: Date;
  description?: string;
  isDone: boolean;
}

export interface ToDoList {
  listItem: ToDoItem[];
}
