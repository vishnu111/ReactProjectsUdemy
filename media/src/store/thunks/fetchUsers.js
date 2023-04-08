import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Here 'users/fetch'is base type. when we make the async thunk request, it dispatches acton type as 'users/fetch/pending' : we can put any string in here.
//Async thunk also creates three variables fetchUsers.pending, fetchUsers.fulfilled, fetchUsers.rejected with values 'users/fetch/pending', 'users/fetch/fulfilled', 'users/fetch/rejected' respectively to serve the redux states better
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //Dev only remove for PROD
  await pause(1000);

  //Whatever you return here from asyncthunk, it will be taken as payload property for redux "action ". We can access that in action from "action.payload"
  //If something goes wrong, we can access the error from action on "action.error"
  return response.data;
});

//Remove for PROD
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
