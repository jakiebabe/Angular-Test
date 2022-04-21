import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTask(): Observable<Task[]> {
    const task = of(TASKS);
    return task;
  }
}
