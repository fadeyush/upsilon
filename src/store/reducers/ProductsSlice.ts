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
        fetchProducts(state) {
            state.isLoading = true; 
        },
        fetchProductsSuccess(state, action: PayloadAction<ProductState[]>) {
            state.isLoading = false; 
            state.products = action.payload;
        },
        fetchProductsError(state, action: PayloadAction<string>) {
            state.isLoading = false; 
            state.error = action.payload;
        }
    }
});

export default productSlice.reducer;