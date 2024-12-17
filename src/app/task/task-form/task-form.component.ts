import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() closePanel = new EventEmitter<'SUBMIT'>();
  taskForm: FormGroup;

  private taskService = inject(TaskService);

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      id: [0],
      project: [0],
    });
  }

  handleSubmit() {
    if(this.taskForm.valid) {
      const newTask: Task = {
        ...this.taskForm.value,
        dueDate: new Date(this.taskForm.value.dueDate),
        completed: false,
      };
      this.taskService.addTask(newTask);
      this.closePanel.emit('SUBMIT');
    }
  }
}
