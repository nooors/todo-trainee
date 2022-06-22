import { Component, OnInit, Input } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { Task } from "src/app/models/task-model";
import { TasksRequestService } from "src/app/services/tasks.requests.service";
import { DialogConfirmComponent } from "../dialog-confirm/dialog-confirm.component";
import { NewTaskComponent } from "../new-task/new-task.component";

@Component({
  selector: "app-task-demo",
  templateUrl: "./task-demo.component.html",
  styleUrls: ["./task-demo.component.scss"],
})
export class TaskDemoComponent implements OnInit {
  @Input() task!: Task;

  constructor(
    private dialogEdit: MatDialog,
    private dialogConfirm: MatDialog,
    private taskSrv: TasksRequestService,
  ) {}

  openDialog(id: number): void {
    const dialogEditConf = new MatDialogConfig();
    dialogEditConf.maxWidth = "50vw";
    dialogEditConf.disableClose = true;
    dialogEditConf.autoFocus = true;
    // Pass the data to the dialog
    dialogEditConf.data = id;

    this.dialogEdit.open(NewTaskComponent, dialogEditConf);
  }

  editTask(id: number) {
    alert(id);
    this.taskSrv.getTaskById(id).subscribe((task) => (this.task = task));
    this.openDialog(id);
  }
  deleteTask(id: number) {
    console.log(id);
    const dialogConfirmConfig = new MatDialogConfig();
    dialogConfirmConfig.maxWidth = "30vw";
    dialogConfirmConfig.maxHeight = "15vw";
    dialogConfirmConfig.disableClose = true;
    // Pass de data to the dialog
    dialogConfirmConfig.data = id;

    this.dialogConfirm.open(DialogConfirmComponent, dialogConfirmConfig);
  }

  ngOnInit(): void {}
}
