import axios from "axios";
import { AppDispatch } from "../store";
import { ProductState } from "../../types/products";
import { productSlice } from "../reducers/ProductsSlice";
import { productItemSlice } from "../reducers/ProductItemSlice";
import { productListSlice } from "../reducers/ProductListSlice";

export const fetchProducts = (limit = 8) => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.productsFetching());

            const response = await axios.get<ProductState[]>(`https://fakestoreapi.com/products?limit=${limit}`)

            dispatch(productSlice.actions.productsFetchingSuccess(response.data))
        } catch (e) {
            console.log(e)
            dispatch(productSlice.actions.productsFetchingError('Произошла ошибка при загрузке товаров!'))
        }
    }
}

export const fetchProductItem = (id: string) => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(productItemSlice.actions.productItemFetching());

            const response = await axios.get<ProductState>(`https://fakestoreapi.com/products/${id}`)

            dispatch(productItemSlice.actions.productItemFetchingSuccess(response.data))
        } catch (e) {
            console.log(e)
            dispatch(productItemSlice.actions.productItemFetchingError('Произошла ошибка при загрузке товара!'))
        }
    }
}

export const fetchProductList = () => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(productListSlice.actions.productListFetching());

            const response = await axios.get<ProductState[]>(`https://fakestoreapi.com/products`)

            dispatch(productListSlice.actions.productListFetchingSuccess(response.data))
        } catch (e) {
            console.log(e)
            dispatch(productListSlice.actions.productListFetchingError('Произошла ошибка при загрузке товара!'))
        }
    }
}