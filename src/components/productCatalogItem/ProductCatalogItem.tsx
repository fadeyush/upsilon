import React, { FC } from 'react';
import classes from './ProductCatalogItem.module.scss'
import { ProductState } from '../../types/products';

const ProductCatalogItem: FC<ProductState> = ({image, title, price}) => {
    return (
        <li className={classes.productCatalogItem}>
            <img width='100px' height='100px' src={image} alt='Картинка продукта'></img>
            <h3 className={classes.productCatalogItem__title}>{title}</h3>
            <p className={classes.productCatalogItem__price}>Цена: {price}</p>
        </li>
    );
};

export default ProductCatalogItem;