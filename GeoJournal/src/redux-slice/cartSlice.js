import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartcount",
  initialState: {
    cartcountnew: [],
  },
  reducers: {
    incrementnew: (state, action) => {
      const item = state.cartcountnew.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartcountnew.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementnew: (state, action) => {
      const item = state.cartcountnew.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartcountnew = state.cartcountnew.filter((i) => i.id !== action.payload.id);
      }
    },
  },
});

export const { incrementnew, decrementnew } = cartSlice.actions;
export default cartSlice.reducer;
