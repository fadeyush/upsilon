import React, { FC } from 'react';
import classes from '../styles/login.module.scss'
import MyButton from '../components/UI/button/MyButton';
import { useAppDispatch } from '../hooks/redux';
import { authSlice } from '../store/reducers/AuthSlice';

const Login: FC = () => {
    const dispatch = useAppDispatch();
    return (
        <main className={classes.auth}>
            <h1>Авторизация</h1>
            <div className={classes.auth__wrapper}>
                <input className={classes.auth__input} type='text' placeholder='Введите логин'></input>
                <input className={classes.auth__input} type='password' placeholder='Введите пароль'></input>
            </div>
            <MyButton  className={classes.auth__button} onClick={()=>dispatch(authSlice.actions.logIn())}>Войти</MyButton>
        </main>
    );
};

export default Login;