import { createSlice } from "@reduxjs/toolkit";

const userinfo = createSlice({
  name: userinfodetails,
  initialState: {
    name: "",
  },
  reducers: {
    getname(state, actions) {
      state.name = actions.payload;
    },
  },
});
export const userinfoActions = userinfo.actions;
export default userinfo;
