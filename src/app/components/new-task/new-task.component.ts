import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
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
  taskEdit?: Task;
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private formBuilder: FormBuilder,
    private httpSrv: TasksRequestService,
    @Inject(MAT_DIALOG_DATA) public data?: any,
  ) {
    if (data !== null) {
      this.taskEdit = data;
      console.log(this.taskEdit?.title);
      alert("this is Editing");
    }
  }

  newTaskForm: FormGroup = this.formBuilder.group({
    title: ["this.taskEdit?.title", Validators.required],
    taskDate: [this.taskEdit?.taskDate],
    deadLine: [
      this.taskEdit ? this.taskEdit.deadLine : "",
      Validators.required,
    ],
    description: [
      this.taskEdit ? this.taskEdit.deadLine : "",
      Validators.required,
    ],
    subTasks: this.formBuilder.array([]),
    progress: [
      this.taskEdit ? this.taskEdit.progress : "ToDo",
      Validators.required,
    ],
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

    const newTask: Task = {
      id: this.taskEdit ? this.taskEdit.id : this.getLastId() + 1,
      title: this.newTaskForm.get("title")?.value,
      taskDate: this.newTaskForm.get("taskDate")?.value,
      deadLine: this.newTaskForm.get("deadLine")?.value,
      description: this.newTaskForm.get("description")?.value,
      subTasks: this.newTaskForm.get("subTasks")?.value,
      progress: this.newTaskForm.get("progress")?.value,
    };
    // this.httpSrv.setNewTask(newTask).subscribe(); ---> passing this responsability to the component which opened the dialog
    this.dialogRef.close(newTask);
  }

  close(): void {
    this.dialogRef.close(false);
  }
  // Because we're faking the API we need to create a new unique index for every entry. So we find the last index to can add 1 in the component simulating an autoincrement field.
  getLastId() {
    this.httpSrv.getTasks().subscribe((tasks) => (this.tasks = tasks));
    const indexes = this.tasks.map((element) => element.id);
    const max = Math.max(...indexes);
    return max;
  }
}
