import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/task-model";

import { TasksRequestService } from "src/app/services/tasks.requests.service";
import { Router } from "@angular/router";
import { TaskDemoComponent } from "../task-demo/task-demo.component";

@Component({
  selector: "app-tasks-render",
  templateUrl: "./tasks-render.component.html",
  styleUrls: ["./tasks-render.component.scss"],
})
export class TasksRenderComponent implements OnInit {
  constructor(private TasksSvc: TasksRequestService, private router: Router) {}
  tasks!: Task[];
  ngOnInit(): void {
    this.getTasks();
  }
  ngOnChages(): void {
    this.getTasks();
  }
  getTasks() {
    this.TasksSvc.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
