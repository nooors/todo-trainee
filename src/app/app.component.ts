import { Component } from "@angular/core";
import { Task } from "./models/task-model";
// import { TasksRequestService } from "./services/tasks.requests.service";---> used to fetch data from json-server in local
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { AdviserService } from "./services/adviser.service";
import { SupabaseService } from "./services/supabase.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "todo-trainee";
  tasks!: Task[];
  whereTo: string = "";
  constructor(
    // private taskService: TasksRequestService, ---> service to fetch data from local json-server
    private supabaseSrv: SupabaseService,
    private router: Router,
    // injection material dialog in constructor
    private dialog: MatDialog,
    private advice: AdviserService,
  ) {}

  openDialog() {
    // instanciating MatDialogConfig which configure the dialog with a set of default behaviors
    const dialogConfig = new MatDialogConfig();
    // Overriding the default behavior of closing dialog by clicking outside of it
    dialogConfig.disableClose = true;
    // Focus automatically set on the first form field of the dialog
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "30vw";
    dialogConfig.maxWidth = "50vw";
    dialogConfig.minHeight = "70vh";

    const newTask = this.dialog.open(NewTaskComponent, dialogConfig);

    newTask.afterClosed().subscribe((responseForm) => {
      // this.taskService.setNewTask(responseForm).subscribe();--> used to fetch data from local json-server
      this.addNewTask(responseForm);
    });
  }

  ngOnInit() {}

  goToTasks() {
    this.router.navigate(["tasks"]);
  }
  async addNewTask(task: Task) {
    await this.supabaseSrv.addNewTask(task);
    // inform to the service some data changed in database to fecth that data and rerender list.
    this.advice.setAdvice(true);
  }
}
