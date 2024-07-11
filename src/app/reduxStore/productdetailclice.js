const { createSlice } = require("@reduxjs/toolkit");

const ProductdetailSlice = createSlice({
  name: "description",
  initialState: {
    detail: {},
  },
  reducers: {
    productdetail(state, action) {
      state.detail = action.payload;
    },
  },
});
export const ProductdetailSliceAction = ProductdetailSlice.actions;
export default ProductdetailSlice;