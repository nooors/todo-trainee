import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Task } from "../models/task-model";

@Injectable({ providedIn: "root" })
export class TasksRequestService {
  BASE_URL = "http://localhost:3000/tasks";
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.BASE_URL);
  }
}
