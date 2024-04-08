import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddedProductProps, AddProductProps } from "../../types/addproduct";

const initialState: AddedProductProps = {
    addedProductList: []
}

export const addedProductSlice = createSlice({
    name: 'addedProductList',
    initialState,
    reducers: {
        addNewProduct(state, action: PayloadAction<AddProductProps>) {
            state.addedProductList.push(action.payload)
        },
        removeProduct(state, action: PayloadAction<string>) {
            state.addedProductList.filter(product => product.dateAddProduct !== action.payload)
        }
    },
});

export default addedProductSlice.reducer;