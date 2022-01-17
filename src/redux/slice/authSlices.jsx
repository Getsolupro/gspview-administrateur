import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoading: true,
    userToken: null,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      });
      //console.log(user);
    },
    retrieveToken: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      });
    },
    logout: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      });
    },
  },
});

export const { login, retrieveToken, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
