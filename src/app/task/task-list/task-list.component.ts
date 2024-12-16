import { Component, inject } from '@angular/core';
import { Task } from '../task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[];

  private taskService = inject(TaskService);

  constructor() {
    this.tasks = this.taskService.getTasks();
  }
  
  handleCheckbox(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    const updatedTask = this.tasks[taskIndex];
    updatedTask.completed = !updatedTask.completed;
    this.tasks = this.taskService.updateTask(updatedTask);
  }

  deleteTask(id: number) {
    this.tasks = this.taskService.deleteTask(id);
  }
}
