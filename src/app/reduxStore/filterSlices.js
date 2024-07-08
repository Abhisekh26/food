const { createSlice } = require("@reduxjs/toolkit");

const filteer = createSlice({
  name: "filtering",
  initialState: {
    priceArray: [],
  
  },
  reducers: {
    getData(state, actions) {
      state.priceArray = actions.payload;
    },

    filterPrice(state,actions) {
     state.priceArray=state.priceArray.filter((item)=>
       item.discountPrice < actions.payload
     )
    }, 

    filteruserRating(state,actions){
      state.priceArray=state.priceArray.filter((item)=>
      item.ratings > actions.payload
      )
    }
 


}
});
export const filteerActions = filteer.actions;
export default filteer;
