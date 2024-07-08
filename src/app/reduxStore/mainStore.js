import filteer from "./filterSlices";



const { configureStore } = require("@reduxjs/toolkit");
const { default: userDetails } = require("./userInfoSlice");

const mainStore = configureStore({
  reducer: { users: userDetails.reducer,
              filteredData:filteer.reducer},
});

export default mainStore;
