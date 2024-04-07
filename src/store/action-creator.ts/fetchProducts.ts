import axios from "axios";
import { AppDispatch } from "../store";
import { ProductState } from "../../types/products";
import { productSlice } from "../reducers/ProductsSlice";

export const fetchProducts = (page = 1, limit = 8) => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.productsFetching());

            const response = await axios.get<ProductState[]>(`https://fakestoreapi.com/products?limit=${limit}`)

            dispatch(productSlice.actions.productsFetchingSuccess(response.data))
        } catch (e) {
            console.log(e)
            dispatch(productSlice.actions.productsFetchingError('Произошла ошибка при загрузке отзывов!'))
        }
    }
}