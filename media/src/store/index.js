import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

//find everything that is exported from "/thunks/fetchUsers" and export from this file.
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
