import filterData from "./filterSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: userDetails } = require("./userInfoSlice");

const mainStore = configureStore({
  reducer: { users: userDetails.reducer,
             filterr:filterData.reducer
   },
});

export default mainStore;
