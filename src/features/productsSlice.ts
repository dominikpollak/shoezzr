import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
