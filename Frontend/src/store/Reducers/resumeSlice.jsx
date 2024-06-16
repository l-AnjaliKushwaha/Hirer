import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeData: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume: (state, action) => {
      if (action.payload === null) {
        state.resumeData = [];
      } else if (
        !state.resumeData.some(
          (obj) => obj.details.id === action.payload.details.id
        )
      ) {
        state.resumeData.push(action.payload);
      }
    },
  },
});

export const { setResume } = resumeSlice.actions;

export default resumeSlice.reducer;
