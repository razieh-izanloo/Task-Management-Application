import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const updatedTasks = [...state.tasks, action.payload];
      state.tasks = updatedTasks; 
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      const findedTask = state.tasks.find((t) => t.id === action.payload);
      if (findedTask) {
        findedTask.completed = !findedTask.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
