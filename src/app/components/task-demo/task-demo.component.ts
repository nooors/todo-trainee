import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { Task } from "src/app/models/task-model";
import { AdviserService } from "src/app/services/adviser.service";
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
  @Output() taskDeleted = new EventEmitter();

  constructor(
    private dialogEdit: MatDialog,
    private dialogConfirm: MatDialog,
    private taskSrv: TasksRequestService,
    private advice: AdviserService,
  ) {}

  openDialog(id: number | Task): void {
    const dialogEditConf = new MatDialogConfig();
    dialogEditConf.maxWidth = "50vw";
    dialogEditConf.disableClose = true;
    dialogEditConf.autoFocus = true;
    // Pass the data to the dialog
    dialogEditConf.data = id;

    const editTask = this.dialogEdit.open(NewTaskComponent, dialogEditConf);
    editTask.afterClosed().subscribe((payload) => {
      if (payload !== false) {
        this.taskSrv.updateTask(payload).subscribe();
        this.advice.setAdvice(true);
      }
    });
  }

  editTask(task: Task) {
    // this.taskSrv.getTaskById(id).subscribe((task) => (this.task = task));
    this.openDialog(task);
  }
  deleteTask(id: number) {
    const dialogConfirmConfig = new MatDialogConfig();
    dialogConfirmConfig.maxWidth = "30vw";
    dialogConfirmConfig.maxHeight = "15vw";
    dialogConfirmConfig.disableClose = true;
    // Pass de data to the dialog
    dialogConfirmConfig.data = id;

    const dialogDelete = this.dialogConfirm.open(
      DialogConfirmComponent,
      dialogConfirmConfig,
    );

    // Subscribe to Observable to know when dialog is closed and if sends message to delete the task
    dialogDelete.afterClosed().subscribe((payload) => {
      if (payload) {
        // Deleting selected task
        this.taskSrv.deleteTask(id).subscribe();
        // Notice render component that the amount of tasks has changed, so it needs to re-render the task list
        this.taskDeleted.emit("borramos la tarea hay que re-renderizar");
      }
    });
  }

  ngOnInit(): void {}
}
