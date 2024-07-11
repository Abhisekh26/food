import filterData from "./filterSlice";
import ProductdetailSlice from "./productdetailclice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: userDetails } = require("./userInfoSlice");

const mainStore = configureStore({
  reducer: { users: userDetails.reducer,
             filterr:filterData.reducer,
             product:ProductdetailSlice.reducer
   },
});

export default mainStore;
