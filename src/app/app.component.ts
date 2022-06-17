import { Component } from "@angular/core";
import { Task } from "./models/task-model";
import { TasksRequestService } from "./services/tasks.requests.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "todo-trainee";
  tasks!: Task[];
  constructor(
    private taskService: TasksRequestService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  goToTasks() {
    this.router.navigate(["tasks"]);
  }
}
