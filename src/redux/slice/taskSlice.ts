import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskProps } from "../../types/taskType";

export interface TaskState {
  taskList: TaskProps[];
}

const initialState: TaskState = {
  taskList: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
    editTask: (state, action: PayloadAction<TaskProps>) => {
      const index = state.taskList.findIndex((t) => t.id === action.payload.id);
      if (index >= 0) {
        state.taskList[index] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.taskList));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
