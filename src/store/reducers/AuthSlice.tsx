import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    isAuth: boolean;
}

const initialState:initialStateProps  = {
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            state.isAuth = true;
            localStorage.setItem('auth', 'true'); 
        },
        logOut(state) {
            state.isAuth = false;
            localStorage.removeItem('auth');
        }
    },
});

export default authSlice.reducer;