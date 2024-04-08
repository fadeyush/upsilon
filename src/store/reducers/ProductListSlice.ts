import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductListStateProps, ProductState } from "../../types/products";

const initialState: ProductListStateProps = {
    productsList: [],
    isLoading: false,
    error: ''
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        productListFetching(state) {
            state.isLoading = true; 
        },
        productListFetchingSuccess(state, action: PayloadAction<ProductState[]>) {
            state.isLoading = false; 
            state.productsList = action.payload;
            state.error = '';
        },
        productListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false; 
            state.error = action.payload;
        }
    },
});

export default productListSlice.reducer;