import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { TasksRequestService } from "src/app/services/tasks.requests.service";
import { Task } from "src/app/models/task-model";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"],
})
export class NewTaskComponent implements OnInit {
  tasks!: Task[];
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private formBuilder: FormBuilder,
    private httpSrv: TasksRequestService,
  ) {}

  newTaskForm: FormGroup = this.formBuilder.group({
    title: ["", Validators.required],
    taskDate: [""],
    deadLine: ["", Validators.required],
    description: ["", Validators.required],
    subTasks: this.formBuilder.array([]),
    progress: ["ToDo", Validators.required],
  });

  ngOnInit(): void {
    this.getLastId();
    console.log(this.tasks);
  }

  get subTasks() {
    return this.newTaskForm.get("subTasks") as FormArray;
  }

  addSubTask() {
    this.subTasks.push(this.formBuilder.control(""));
  }
  removeSubTask(i: any): void {
    this.subTasks.removeAt(i);
  }

  submitForm() {
    // Need to build the object to pass to the data base
    const indexes = this.tasks.map((element) => element.id);
    const max = Math.max(...indexes);
    const newTask: Task = {
      id: max + 1,
      title: this.newTaskForm.get("title")?.value,
      taskDate: this.newTaskForm.get("taskDate")?.value,
      deadLine: this.newTaskForm.get("deadLine")?.value,
      description: this.newTaskForm.get("description")?.value,
      subTasks: this.newTaskForm.get("subTasks")?.value,
      progress: this.newTaskForm.get("progress")?.value,
    };
    this.httpSrv.setNewTask(newTask).subscribe();
    this.close();
  }

  close(): void {
    this.dialogRef.close("false");
  }

  getLastId() {
    this.httpSrv.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
