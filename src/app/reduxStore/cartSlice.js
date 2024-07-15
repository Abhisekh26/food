
const { createSlice } = require("@reduxjs/toolkit");

const cart = createSlice({
  name: "addingCart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart(state, action) {
      const { product, size, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.title === product.title 
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...product, size, quantity });
      }
    },
    incrementItem(state, action) {
      const { title, size } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.title === title 
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementItem(state, action) {
      const { title, size } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.title === title 
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeItem(state, action) {
      const { title, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item.title === title )
      );
    },
  },
});

export const cartActions = cart.actions;
export default cart;
