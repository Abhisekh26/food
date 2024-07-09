const { createSlice } = require("@reduxjs/toolkit");

const filterData = createSlice({
  name: "filteringData",
  initialState: {
    originalArray: [], 
    filteredArray: [],
  },
  reducers: {
    displayData(state, actions) {
      state.originalArray = actions.payload;
      state.filteredArray = actions.payload;
    },
    filterPrice(state, actions) {
      const [min, max] = actions.payload.split("-").map(Number);
      state.filteredArray = state.originalArray.filter(
        (item) => item.discountPrice >= min && item.discountPrice <= max
      );
    },
    filterRating(state, actions) {
      const rate = Number(actions.payload);
      state.filteredArray = state.originalArray.filter(
        (item) => item.ratings >= rate
      );
    },
    filterBestseller(state, actions) {
      if (actions.payload) {
        state.filteredArray = state.originalArray.filter(
          (item) => item.bestsellers === "yes"
        );
      } else {
        state.filteredArray = state.originalArray;
      }
    },
    resetFilters(state) {
      state.filteredArray = state.originalArray;
    },
  },
});

export const filterDataActions = filterData.actions;
export default filterData;
