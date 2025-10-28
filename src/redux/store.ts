import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./slice/taskSlice";
import modalReducer from "./slice/modalSlice";
// ...

export const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
