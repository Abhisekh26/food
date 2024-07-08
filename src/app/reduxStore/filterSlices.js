const { createSlice } = require("@reduxjs/toolkit");

const filteer = createSlice({
  name: "filtering",
  initialState: {
    priceArray: [],
    target: null,
  },
  reducers: {
    getData(state, actions) {
      state.priceArray = actions.payload;
    },

    filterPrice() {
      var arr = [];
      priceArray.filter((items) => {
        if (items.discountPrice > target) arr.push(items);
        priceArray = arr;
      });
    },
 

  getTarget(state, actions) {
    state.target = actions.payload;
  },
}
});
export const filteerActions = filteer.actions;
export default filteer;
