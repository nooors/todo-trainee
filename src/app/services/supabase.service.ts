import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { enviroment } from "enviroment";
import { Task } from "../models/task-model";
@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      enviroment.supabaseUrl,
      enviroment.supabaseKey,
    );
  }

  getTasks() {
    return this.supabase.from<Task>("tasks").select("*");
  }

  getTaskById(id: number) {
    return this.supabase.from("tasks").select("*").eq("id", id);
  }

  getTaskByItem(item: string, value: string) {
    return this.supabase.from("tasks").select("*").eq(item, value);
  }

  addNewTask(task: Task) {
    return this.supabase.from("tasks").insert(task);
  }

  updateTask(id: number, taskUpdated: Task) {
    return this.supabase.from("tasks").update(taskUpdated).eq("id", id);
  }

  deleteTask(id: number) {
    return this.supabase.from("tasks").delete().eq("id", id);
  }
}
