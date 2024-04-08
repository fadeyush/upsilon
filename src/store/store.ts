import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductsSlice";
import productItemReducer from "./reducers/ProductItemSlice";
import productListReducer from "./reducers/ProductListSlice";
import addedProductReducer from "./reducers/AddedProductSlice";

const rootReducer = combineReducers({
    productReducer,
    productItemReducer,
    productListReducer,
    addedProductReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
