import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface TaskState {
  value: boolean;
}

// Define the initial state using that type
const initialState: TaskState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "task",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isModalOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { isModalOpen } = counterSlice.actions;

export default counterSlice.reducer;
