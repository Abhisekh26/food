const { createSlice } = require("@reduxjs/toolkit");

const search = createSlice({
  name: "searching",
  initialState: {
    result: [],
    userInput: "",
    arr:[]
  },
  reducers: {
    searchResult(state, action) {
      state.result = action.payload;
      state.arr=action.payload
    },

    searchParameter(state, action) {
      state.userInput = action.payload;
    },

    finalResult(state, action) {
      state.result = state.arr.filter((item) => {
      return   item.title.toLowerCase().includes(state.userInput.toLowerCase());
      });
    },
  },
});
export const searchActions = search.actions;
export default search;
