import { Component } from "@angular/core";
import { mokoup } from "./models/mockData";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "todo-trainee";
  tasks = mokoup;
}
