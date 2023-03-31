export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
}

export interface TaskCardProps {
  task: Task;
  onTaskDelete?: (id: number) => void;
  onTaskStatusChange?: (id: number, status: string) => void;
}
