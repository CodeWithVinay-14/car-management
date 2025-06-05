import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  welcomeMessage: 'Welcome to the Home Page!',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateMessage(state, action) {
      state.welcomeMessage = action.payload;
    },
  },
});

export const { updateMessage } = homeSlice.actions;
export default homeSlice.reducer;
