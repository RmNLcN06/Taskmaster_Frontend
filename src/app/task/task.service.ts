import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {
      id: 1,
      name: "Design wireframe",
      description: "",
      completed: false,
      dueDate: new Date("2024-12-15"),
      project: 1
    },
    {
      id: 2,
      name: "Develop Frontend",
      description: "",
      completed: true,
      dueDate: new Date("2024-08-11"),
      project: 1
    },
    {
      id: 3,
      name: "Implement Backend",
      description: "",
      completed: false,
      dueDate: new Date("2024-12-13"),
      project: 1
    },
    {
      id: 4,
      name: "Test Frontend",
      description: "",
      completed: true,
      dueDate: new Date("2024-11-18"),
      project: 1
    },
  ];

  constructor() { }

  // getTasks
  getTasks() {
    return this.tasks;
  }

  // getTask
  getTask(existingTask: Task) {
    const taskIndex = this.tasks.findIndex((task) => task.id === existingTask.id)
    return taskIndex;
  }

  // addTask
  addTask(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }

  // updateTask
  updateTask(newTask: Task) {
    const taskIndex = this.tasks.findIndex((task) => task.id === newTask.id);
    this.tasks[taskIndex] = newTask;
    return this.tasks;
  }

  // deleteTask
  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
    return this.tasks;
  }
}
