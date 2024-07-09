const { createSlice } = require("@reduxjs/toolkit");

const filterData = createSlice({
  name: "filteringData",
  initialState: {
    filteredArray: [],
    x: null,
  },
  reducers: {
    displayData(state, actions) {
      state.filteredArray = actions.payload;
    },

    filterPrice(state, actions) {
      state.x = actions.payload.split("-");
      const first = parseInt(state.x[0]);
      const second = parseInt(state.x[1]);
      state.filteredArray = state.filteredArray.filter(
        (item) => item.discountPrice > first && item.discountPrice < second
      );
    },

    filterRating(state, actions) {
      const rate = parseInt(actions.payload);
      state.filteredArray = state.filteredArray.filter(
        (item) => item.ratings > rate
      );
    },

    filterBestseller(state, actions) {
      actions.payload
        ? (state.filteredArray = state.filteredArray.filter(
            (items) => items.bestsellers === "yes"
          ))
        : null;
    },
  },
});
export const filterDataActions = filterData.actions;
export default filterData;
