import { Component } from '@angular/core';
import { Task } from '../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
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
  ]
}
