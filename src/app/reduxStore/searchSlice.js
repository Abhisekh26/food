const { createSlice } = require("@reduxjs/toolkit");

const search = createSlice({
  name: "searching",
  initialState: {
    result: {},
  },
  reducers: {
    searchResult(state, action) {
      state.result = action.payload;
    },
    finalResult(state,action){
      state.result=state.result.filter((item)=>{
        
      })
    }
  },
});
export const searchActions = search.actions;
export default search;
