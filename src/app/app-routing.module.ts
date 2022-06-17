import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TaskCardComponent } from "./components/task-card/task-card.component";
import { TasksRenderComponent } from "./components/tasks-render/tasks-render.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "task", component: TaskCardComponent },
  { path: "tasks", component: TasksRenderComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
