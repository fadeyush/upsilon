import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsStateProps, ProductState } from "../../types/products";

const initialState: ProductsStateProps = {
    products: [],
    isLoading: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true; 
        },
        productsFetchingSuccess(state, action: PayloadAction<ProductState[]>) {
            state.isLoading = false; 
            state.products = action.payload;
            state.error = '';
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false; 
            state.error = action.payload;
        }
    },
});

export default productSlice.reducer;