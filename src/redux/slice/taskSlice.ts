import { createSlice } from "@reduxjs/toolkit";
import type { TaskProps } from "../../types/taskType";

export interface TaskState {
  taskList: TaskProps[];
}

const initialState: TaskState = {
  taskList: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

export const counterSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
  },
});

export const { addTask } = counterSlice.actions;

export default counterSlice.reducer;
