import { Component, OnInit, Input } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Task } from "src/app/models/task-model";

@Component({
  selector: "app-task-demo",
  templateUrl: "./task-demo.component.html",
  styleUrls: ["./task-demo.component.scss"],
})
export class TaskDemoComponent implements OnInit {
  @Input() task!: Task;
  constructor(private dialogConfi: MatDialog) {}

  editTask() {}
  deleteTask() {}

  ngOnInit(): void {}
}
