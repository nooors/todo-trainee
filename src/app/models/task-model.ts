export interface Task {
  id: number;
  title: string;
  taskDate: string;
  deadLine: string;
  description: string;
  subTasks: string[];
  progress: Progress;
}

export type Progress = "ToDo" | "WIP" | "Done";
