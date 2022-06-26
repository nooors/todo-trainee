import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/task-model";

// import { TasksRequestService } from "src/app/services/tasks.requests.service"; --> service to fetch data from json-server

import { TaskDemoComponent } from "../task-demo/task-demo.component";
import { AdviserService } from "src/app/services/adviser.service";
import { Subscription } from "rxjs";
import { SupabaseService } from "src/app/services/supabase.service";

@Component({
  selector: "app-tasks-render",
  templateUrl: "./tasks-render.component.html",
  styleUrls: ["./tasks-render.component.scss"],
})
export class TasksRenderComponent implements OnInit {
  tasks!: Task[] | null;
  adviceSubscription!: Subscription;
  getTasksVariable!: any;

  constructor(
    // private TasksSvc: TasksRequestService,  --> this service was used to conect with json-server fake API
    private supabaseApi: SupabaseService,

    public advice: AdviserService,
  ) {}
  ngOnInit(): void {
    this.getTasks();
    this.adviceSubscription = this.advice.advice.subscribe((state) => {
      if (state === true) {
        this.getTasks();
        this.advice.setAdvice(false);
      }
    });
  }
  ngOnChages(): void {
    this.getTasks();
  }
  async getTasks() {
    // this.TasksSvc.getTasks().subscribe((tasks) => (this.tasks = tasks)); --> this method belongs to the service used to conect with json-server API
    const { data, error } = await this.supabaseApi.getTasks();
    this.tasks = data;
  }

  reload(e: any) {
    // The task list has changed in db, so it needs to render the new task list

    this.getTasks();
  }
}
