import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRouter, publicRouter } from './UI/router';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { authSlice } from '../store/reducers/AuthSlice';

const Router: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    useEffect(() =>{
        if (localStorage.getItem('auth')) {
            dispatch(authSlice.actions.logIn())
        }
      }, [])
    return (
        <>{isAuth ?
            <Routes>
                {privateRouter.map(route =>
                    <Route
                        key={route.path}
                        element={<route.element/>}
                        path={route.path}
                    />
                )}
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/*" element={<Navigate to="/products" replace />} />
            </Routes>
            :
            <Routes>
            {publicRouter.map(route =>
                <Route
                    key={route.path}
                    element={<route.element/>}
                    path={route.path}
                />
            )}
            <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
        }</>
        
    );
};

export default Router;