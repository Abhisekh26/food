const { configureStore } = require("@reduxjs/toolkit");
const { default: userDetails } = require("./userInfoSlice");

const mainStore = configureStore({
  reducer: { users: userDetails.reducer },
});

export default mainStore;
