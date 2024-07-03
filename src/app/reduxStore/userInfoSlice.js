import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userinfodetails",
  initialState: {
    name:"",
    Token:localStorage.getItem('token') || ""
  },
  reducers: {
    getname(state, actions) {
      state.name = actions.payload;
    },
    getToken(state, actions) {
      state.Token = actions.payload;
    },
  },
});
export const userDetailsActions = userDetails.actions;
export default userDetails;
