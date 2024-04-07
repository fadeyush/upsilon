import React, { FC } from 'react';
import classes from './ProductCatalogItem.module.scss'
import { ProductState } from '../../types/products';
import { useNavigate } from 'react-router-dom';

const ProductCatalogItem: FC<ProductState> = ({id, image, title, price}) => {
    
    const router = useNavigate();
    return (
        <li onClick={()=>router(`/products/${id}`)} className={classes.productCatalogItem}>
            <img width='100px' height='100px' src={image} alt='Картинка продукта'></img>
            <h3 className={classes.productCatalogItem__title}>{title}</h3>
            <p className={classes.productCatalogItem__price}>Цена: {price}</p>
        </li>
    );
};

export default ProductCatalogItem;