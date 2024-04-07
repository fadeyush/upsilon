import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, ProductItemStateProps } from "../../types/products";

const initialState: ProductItemStateProps = {
    productItem: {title: '', price: null},
    isLoading: false,
    error: ''
}

export const productItemSlice = createSlice({
    name: 'productItem',
    initialState,
    reducers: {
        productItemFetching(state) {
            state.isLoading = true; 
        },
        productItemFetchingSuccess(state, action: PayloadAction<ProductState>) {
            state.isLoading = false; 
            state.productItem = action.payload;
            state.error = '';
        },
        productItemFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false; 
            state.error = action.payload;
        }
    },
});

export default productItemSlice.reducer;