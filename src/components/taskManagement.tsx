import { Task } from "../types/task";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toggleTaskStatus } from "../redux/tasksSlice";

export const TaskManagement = (props: { task: Task }) => {
  const { task } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <td
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        cursor: "pointer",
        textDecoration: task.completed ? "line-through" : "none",
      }}
      onClick={() => dispatch(toggleTaskStatus(task.id))}
    >
      {task.title}
    </td>
  );
};
