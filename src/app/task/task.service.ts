import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Design wireframe',
      description: '',
      completed: false,
      dueDate: new Date('2023-07-31'),
      project: 1,
    },
    {
      id: 2,
      name: 'Develop frontend',
      description: '',
      completed: true,
      dueDate: new Date('2023-06-15'),
      project: 1,
    },
    {
      id: 3,
      name: 'Implement backend',
      description: '',
      completed: false,
      dueDate: new Date('2023-08-15'),
      project: 1,
    },
    {
      id: 4,
      name: 'Have a party',
      description: '',
      completed: true,
      dueDate: new Date('2023-11-15'),
      project: 1,
    },
  ];
  constructor(private http: HttpClient) {}

  // getTasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${BASE_URL}/tasks`);
  }

  // addTask
  addTask(task: Task) {
    return this.http.post(`${BASE_URL}/tasks`, { ...task, project: null });
  }

  // updateTask
  updateTask(newTask: Task) {
    return this.http.put(`${BASE_URL}/tasks/${newTask.id}`, {
      ...newTask,
      project: null,
    });
  }

  // deleteTask
  deleteTask(id: number) {
    return this.http.delete(`${BASE_URL}/tasks/${id}`);
  }
}
