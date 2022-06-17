import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";

import { TaskCardComponent } from "./components/task-card/task-card.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TasksRenderComponent } from './components/tasks-render/tasks-render.component';
import { TaskDemoComponent } from './components/task-demo/task-demo.component';

@NgModule({
  declarations: [AppComponent, TaskCardComponent, PageNotFoundComponent, TasksRenderComponent, TaskDemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Import HttpClientModule after BrowserModule.
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
