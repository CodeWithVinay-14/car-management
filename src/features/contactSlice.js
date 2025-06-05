import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    info: 'Contact us at info@example.com',
  },
  reducers: {
    updateContactInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { updateContactInfo } = contactSlice.actions;
export default contactSlice.reducer;
