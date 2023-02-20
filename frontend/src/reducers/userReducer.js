import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
