import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Task } from "src/app/models/task-model";
import { TasksRequestService } from "src/app/services/tasks.requests.service";

@Component({
  selector: "app-dialog-confirm",
  template: `
    <h2 mat-dialog-title>Are you sure you want to delete this task?</h2>
    <mat-dialog-content></mat-dialog-content>
    <mat-divider></mat-divider>

    <mat-dialog-actions>
      <button mat-raised-button color="accent" (click)="closeDialog()">
        Cancel
      </button>
      <button mat-raised-button color="primary" (click)="deleteTask()">
        Delete
      </button>
    </mat-dialog-actions>
  `,
  styleUrls: ["./dialog-confirm.component.scss"],
})
export class DialogConfirmComponent implements OnInit {
  dataConfirm!: any;
  constructor(
    public dialogConfirmRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpSrv: TasksRequestService,
  ) {
    this.dataConfirm = data;
    console.log(data);
  }

  deleteTask() {
    this.httpSrv.deleteTask(this.dataConfirm).subscribe();
    this.dialogConfirmRef.close();
  }

  closeDialog() {
    alert(this.data);
    this.dialogConfirmRef.close();
  }

  ngOnInit(): void {}
}
