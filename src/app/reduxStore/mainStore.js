import { configureStore } from "@reduxjs/toolkit";

import userDetails from "./userInfoSlice";

const mainStore = configureStore({
  reducer: { users: userDetails.reducer },
});

export default mainStore;
