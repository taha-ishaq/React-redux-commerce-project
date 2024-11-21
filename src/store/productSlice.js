import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], 
  status: "idle",
};

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result; 
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "Loading"; 
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export default productSlice.reducer;
