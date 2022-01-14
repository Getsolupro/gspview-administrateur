import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoading: true,
    userId: null,
    userToken: null,
    group: null,
  },
  reducers: {
    login: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        userId: action.payload.id,
        userToken: action.payload.token,
        group: action.payload.group,
      });
    },
    retrieveToken: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        userToken: action.payload.token,
        group: action.payload.group,
      });
    },
    logout: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        userId: action.payload.id,
        userToken: action.payload.token,
        group: action.payload.group,
      });
    },
  },
});

export const { login, retrieveToken, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
