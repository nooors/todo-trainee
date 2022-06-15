import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Task } from "../../models/task-model";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.scss"],
})
export class TaskCardComponent implements OnInit {
  @Input() item!: Task;
  taskDate: Date = new Date();
  title = new FormControl("");
  description = new FormControl("");
  task!: Task;

  saveData(): Task {
    this.task = {
      id: 1,
      title: this.title.value,
      taskDate: this.taskDate.toDateString(),
      description: this.description.value,
    };
    console.log(this.task);
    return this.task;
  }

  resetData() {
    this.title.reset();
    this.description.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
