import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state, { payload }) => {
            state.products = payload;
        }
    },
});

export const { getProducts } = productsSlice.actions;
export const getAllProducts = (state) => state.products.products
export default productsSlice.reducer;