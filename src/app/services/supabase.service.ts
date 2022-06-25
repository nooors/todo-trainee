import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { enviroment } from "enviroment";
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

  async getTasks() {
    const { data, error } = await this.supabase.from("tasks").select("*");
  }

  async getTaskById(id: number) {
    const { data, error } = await this.supabase
      .from("tasks")
      .select("*")
      .eq("id", id);
  }

  async addNewTask(task: Task) {
    const { data, error } = await this.supabase.from("tasks").insert(task);
  }

  async deleteTask(id: number) {
    const { data, error } = await this.supabase
      .from("tasks")
      .delete()
      .eq("id", id);
  }
}
