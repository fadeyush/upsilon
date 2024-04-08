import React, { FC } from 'react';
import classes from './Navigation.module.scss'
import { Link } from 'react-router-dom';
import { Pages } from '../../types/pages';

const Navigation: FC = () => {
    return (
        <nav className={classes.Navigation}>
            <Link to={Pages.products}>Все продукты</Link>
            <Link to={Pages.addProduct}>Создать продукт</Link>
        </nav>
    );
};

export default Navigation;