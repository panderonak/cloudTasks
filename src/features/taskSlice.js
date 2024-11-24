import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
};

const taskSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllTasks: (state, action) => {
      state.allTasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.allTasks = state.allTasks.filter(
        (todo) => todo._id !== action.payload
      );
    },
  },
});

export const { setAllTasks, deleteTask } = taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
