import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assuming you have a userSlice.js file

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
