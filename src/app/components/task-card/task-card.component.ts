import { Component, Input, OnInit } from "@angular/core";
import { Task } from "../../models/task-model";
import { TasksRequestService } from "src/app/services/tasks.requests.service";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.scss"],
})
export class TaskCardComponent implements OnInit {
  task!: Task;
  n: number = 1;

  constructor(private taskSrv: TasksRequestService) {}

  ngOnInit(): void {
    this.getTask();
  }
  getTask() {
    this.taskSrv.getTaskById(this.n).subscribe((task) => (this.task = task));
  }
}
