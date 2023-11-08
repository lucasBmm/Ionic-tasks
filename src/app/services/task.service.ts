import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() { }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask(valor: string, data: string) {
    data = data.replace("-", "/");
    let task: Task = {
      value: valor,
      date: new Date(data),
      done: false
    };

    this.tasks.push(task);
    console.log(this.tasks);
  }

  public deleteTask() {

  }

  public updateTask() {
    
  }
}

interface Task {
  value: string;
  date: Date;
  done?: boolean;
}
