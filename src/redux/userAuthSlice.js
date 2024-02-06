import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAuth: false,
  error: undefined,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,

  reducers: {
    userLogin: (state) => {
      state.userAuth = true;
    },
    userLogout: (state) => {
      state.userAuth = false;
    },
  },
});

export const { userLogin, userLogout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
