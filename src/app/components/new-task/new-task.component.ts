import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private formBuilder: FormBuilder,
  ) {}

  newTaskForm: FormGroup = this.formBuilder.group({
    title: ["", Validators.required],
    taskDate: [""],
    deadLine: ["", Validators.required],
    description: ["", Validators.required],
    subtasks: [],
    progress: ["ToDo", Validators.required],
  });

  submitForm() {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
