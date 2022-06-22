import { Component } from "@angular/core";
import { Task } from "./models/task-model";
import { TasksRequestService } from "./services/tasks.requests.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NewTaskComponent } from "./components/new-task/new-task.component";

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
    // injection material dialog in constructor
    private dialog: MatDialog,
  ) {}

  openDialog() {
    // instanciating MatDialogConfig which configure the dialog with a set of default behaviors
    const dialogConfig = new MatDialogConfig();
    // Overriding the default behavior of closing dialog by clicking outside of it
    dialogConfig.disableClose = true;
    // Focus automatically set on the first form field of the dialog
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = "50vw";

    this.dialog.open(NewTaskComponent, dialogConfig);
  }

  ngOnInit() {}

  goToTasks() {
    this.router.navigate(["tasks"]);
  }
}
