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
            state.addedProductList=state.addedProductList.filter(product => product.idAddProduct !== action.payload)
            localStorage.setItem("addedProductList", JSON.stringify(state.addedProductList))
        }
        ,
        editProduct(state, action: PayloadAction<AddProductProps>) {
            state.addedProductList.forEach(product => {
                if(product.idAddProduct !== action.payload.idAddProduct) {
                    product.priceAddProduct = action.payload.priceAddProduct
                    product.titleAddProduct = action.payload.titleAddProduct
                    product.descriptionAddProduct = action.payload.descriptionAddProduct
                    product.isAddProductPublished = action.payload.isAddProductPublished
                }
            })

            localStorage.setItem("addedProductList", JSON.stringify(state.addedProductList))
        }
    },
});

export default addedProductSlice.reducer;