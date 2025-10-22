import { Dispatch, SetStateAction } from "react";
import { Task } from "../types/task";

export const TaskManagement = (props: {
  task: Task;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) => {
  const { tasks, task, setTasks } = props;

  const toggleTaskStatus = (id: number) => {
    const updated = tasks.map((task: any) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <td
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        cursor: "pointer",
        textDecoration: task.completed ? "line-through" : "none",
      }}
      onClick={() => toggleTaskStatus(task.id)}
    >
      {task.title}
    </td>
  );
};
