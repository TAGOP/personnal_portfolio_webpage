import { configureStore } from '@reduxjs/toolkit';
//slices
import projectReducer from "../features/projects.js/projectSlice"

export const store = configureStore({
  reducer: {
    projects:projectReducer,
  },
});
