import React, { FC } from 'react';
import classes from './Navigation.module.scss'
import { Link } from 'react-router-dom';
import { Pages } from '../../types/pages';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import MyButton from '../UI/button/MyButton';
import { authSlice } from '../../store/reducers/AuthSlice';

const Navigation: FC = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.authReducer);
    return (
        <nav className={classes.Navigation}>
            <Link to={Pages.products}>Все продукты</Link>
            <Link to={Pages.addProduct}>Создать продукт</Link>
            {isAuth ? <MyButton onClick={()=> dispatch(authSlice.actions.logOut())}>Выйти</MyButton>: ''}
        </nav>
    );
};

export default Navigation;