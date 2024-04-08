import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductsSlice";
import productItemReducer from "./reducers/ProductItemSlice";

const rootReducer = combineReducers({
    productReducer,
    productListReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
