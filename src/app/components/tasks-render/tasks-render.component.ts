import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/task-model";

import { TasksRequestService } from "src/app/services/tasks.requests.service";

import { TaskDemoComponent } from "../task-demo/task-demo.component";
import { AdviserService } from "src/app/services/adviser.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-tasks-render",
  templateUrl: "./tasks-render.component.html",
  styleUrls: ["./tasks-render.component.scss"],
})
export class TasksRenderComponent implements OnInit {
  tasks!: Task[];
  adviceSubscription!: Subscription;

  constructor(
    private TasksSvc: TasksRequestService,

    public advice: AdviserService,
  ) {}
  ngOnInit(): void {
    this.getTasks();
    this.adviceSubscription = this.advice.advice.subscribe((state) => {
      if (state === true) {
        console.log(state);
        this.getTasks();
        this.advice.setAdvice(false);
        this.adviceSubscription.unsubscribe;
      }
    });
  }
  ngOnChages(): void {
    this.getTasks();
  }
  getTasks() {
    this.TasksSvc.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  reload(e: any) {
    // The task list has changed in db, so it needs to render the new task list
    alert("emit has arrived" + e);
    this.getTasks();
  }
}
