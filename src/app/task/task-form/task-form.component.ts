import { Component, EventEmitter, inject, Input, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  @Input() currentTask: Task | null = null;
  @Input() formType: 'UPDATE' | 'CREATE' = 'CREATE';
  @Output() closePanel = new EventEmitter<'SUBMIT' | 'CANCEL'>();
  taskForm: FormGroup;

  private taskService = inject(TaskService);

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      id: [5],
      project: [1],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentTask'] && changes['currentTask'].currentValue) {
      const task = changes['currentTask'].currentValue as Task;

      const dueDateFormatted = task.dueDate
        ? new Date(task.dueDate).toISOString().split('T')[0]
        : '';

      this.taskForm.patchValue({
        ...task,
        dueDate: dueDateFormatted,
      });
    }
  }

  handleSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        ...this.taskForm.value,
        dueDate: new Date(this.taskForm.value.dueDate),
        completed:
          this.formType === 'UPDATE' ? this.taskForm.value.completed : false,
      };

      if (this.formType === 'CREATE') {
        this.taskService.addTask(newTask).subscribe(() => {
          console.log('Task added successfully')
          this.closePanel.emit('SUBMIT');
        }, (error) => {
          console.error('Error adding task:', error);
        });
      } else {
        this.taskService.updateTask(newTask).subscribe(() => {
          this.closePanel.emit('SUBMIT');
        });
      }
    }
  }

  handleCancel() {
    this.closePanel.emit('CANCEL');
  }
}
