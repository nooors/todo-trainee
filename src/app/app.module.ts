import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material/material.module";

import { AppComponent } from "./app.component";
import { TaskCardComponent } from "./components/task-card/task-card.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TasksRenderComponent } from "./components/tasks-render/tasks-render.component";
import { TaskDemoComponent } from "./components/task-demo/task-demo.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { DialogConfirmComponent } from "./components/dialog-confirm/dialog-confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    PageNotFoundComponent,
    TasksRenderComponent,
    TaskDemoComponent,
    NewTaskComponent,
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Import HttpClientModule after BrowserModule.
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
