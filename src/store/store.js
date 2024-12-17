import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../slices/habit.js";
const store = configureStore({ reducer: { habit: habitReducer } });
export default store;
