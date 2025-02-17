import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice, // Cart reducer
    products: productSlice, // Products reducer
  },
});

export default store;
