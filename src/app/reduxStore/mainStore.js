import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./tokenslice";

const mainStore = configureStore({
  reducer: { users: userinfo.reducer },
});

export default mainStore;
