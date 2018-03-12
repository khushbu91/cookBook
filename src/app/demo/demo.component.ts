import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  todoForm: FormGroup;
  progressForm: FormGroup;
  doneForm: FormGroup;
  data = {
    'todo': ['todo', 'todo', 'todo'],
    'progress': ['progress', 'progress', 'progress'],
    'done': ['done', 'done', 'done']
  };
  constructor(public fb: FormBuilder, private dragulaService: DragulaService) {
    this.todoForm = this.fb.group({
      task: [{ value: '' }, Validators.required ]
    });
    this.progressForm = this.fb.group({
      task: [{ value: ''}, Validators.required ]
    });
    this.doneForm = this.fb.group({
      task: [{ value: '' }, Validators.required ]
    });
    dragulaService.drop.subscribe((value) => {
      this.setData();
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('data')) {
      this.setData();
    } else {
      this.data = JSON.parse(localStorage.getItem('data'));
    }
  }
  addTask(type) {
      switch (type) {
        case 'todo':
          const todo = this.todoForm.getRawValue();
          this.data.todo.push(todo.task);
          break;
        case 'progress':
          const progress = this.progressForm.getRawValue();
          this.data.progress.push(progress.task);
          break;
        case 'done':
          const done = this.doneForm.getRawValue();
          this.data.done.push(done.task);
          break;
      }
      this.setData();
  }
  removeTask(event, type, index) {
    switch (type) {
      case 'todo':
        this.data.todo.splice(index, 1);
        break;
      case 'progress':
        this.data.progress.splice(index, 1);
        break;
      case 'done':
        this.data.done.splice(index, 1);
    }
    this.setData();
  }
  setData() {
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
