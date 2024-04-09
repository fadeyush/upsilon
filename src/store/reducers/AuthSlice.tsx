import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            state.isAuth = true; 
        },
        logOut(state) {
            state.isAuth = false;
        }
    },
});

export default authSlice.reducer;