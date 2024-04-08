import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddedProductProps, AddProductProps } from "../../types/addproduct";

const initialState: AddedProductProps = {
    addedProductList: []
}

export const addedProductSlice = createSlice({
    name: 'addedProductList',
    initialState,
    reducers: {
        addProductsFromLocal(state, action: PayloadAction<AddProductProps[]>) {
            state.addedProductList = action.payload
        },
        addNewProduct(state, action: PayloadAction<AddProductProps>) {
            state.addedProductList.push(action.payload)
            localStorage.setItem("addedProductList", JSON.stringify(state.addedProductList))
        },
        removeProduct(state, action: PayloadAction<string>) {
            state.addedProductList.filter(product => product.dateAddProduct !== action.payload)
            localStorage.setItem("addedProductList", JSON.stringify(state.addedProductList))
        }
    },
});

export default addedProductSlice.reducer;