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
  // Tasks for new Task
  tasks!: Task[];
  // Tasks for edit Task
  taskEdit?: Task;
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private formBuilder: FormBuilder,
    private httpSrv: TasksRequestService,
    @Inject(MAT_DIALOG_DATA) public data?: any,
  ) {
    if (data !== null) {
      this.taskEdit = data;
    }
  }

  newTaskForm: FormGroup = this.formBuilder.group({
    title: ["", Validators.required],
    taskDate: [],
    deadLine: ["", Validators.required],
    description: ["", Validators.required],
    subTasks: this.formBuilder.array([]),
    progress: ["ToDo", Validators.required],
  });

  ngOnInit(): void {
    // if taskEdit exists it means the component is been used to Edit the task, so we provide the values of the task to the formGroup
    if (this.taskEdit) {
      this.newTaskForm.reset({
        title: this.taskEdit.title,
        taskDate: this.taskEdit.taskDate,
        deadLine: this.taskEdit.deadLine,
        description: this.taskEdit.description,
        subTasks: this.taskEdit.subTasks,
        progress: this.taskEdit.progress,
      });
      // For each subtask we need to create a control and provide the newTaskFrom.subTask value as default value.
      this.taskEdit.subTasks.map((subtask) =>
        this.subTasks.push(this.formBuilder.control(subtask)),
      );
    }

    this.getLastId();
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
