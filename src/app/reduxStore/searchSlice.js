const { createSlice } = require("@reduxjs/toolkit");

const search = createSlice({
  name: "searching",
  initialState: {
    result: [],
    userInput: "",
  },
  reducers: {
    searchResult(state, action) {
      state.result = action.payload;
    },

    searchParameter(state, action) {
      state.userInput = action.payload;
    },

    finalResult(state, action) {
      state.result = state.result.filter((item) => {
      return   item.title.toLowerCase().includes(state.userInput.toLowerCase());
      });
    },
  },
});
export const searchActions = search.actions;
export default search;
