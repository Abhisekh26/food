import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userinfodetails",
  initialState: {
    name:"",
    Token:localStorage.getItem('token') || "" ,
    isLoggedIn:localStorage.getItem("token") ?  true:false
  },
  reducers: {
    getname(state, actions) {
      state.name = actions.payload;
    },
    
  },
});
export const userDetailsActions = userDetails.actions;
export default userDetails;
