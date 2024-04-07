import React, { FC } from 'react';
import classes from './ProductItem.module.scss'
import { ProductState } from '../../types/products';

const ProductItem: FC<ProductState> = ({image, title, price}) => {
    return (
        <li className={classes.productItem}>
            <img width='100px' height='100px' src={image} alt='Картинка продукта'></img>
            <h3 className={classes.productItem__title}>{title}</h3>
            <p className={classes.productItem__price}>Цена: {price}</p>
        </li>
    );
};

export default ProductItem;