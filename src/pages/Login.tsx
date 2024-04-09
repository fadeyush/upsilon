import React, { FC } from 'react';
import MyButton from '../components/UI/button/MyButton';
import { useAppDispatch } from '../hooks/redux';
import { authSlice } from '../store/reducers/AuthSlice';

const Login: FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>Авторизация</h1>
            <input type='text' placeholder='Введите логин'></input>
            <input type='password' placeholder='Введите пароль'></input>
            <MyButton onClick={()=>dispatch(authSlice.actions.logIn())}>Войти</MyButton>
        </div>
    );
};

export default Login;