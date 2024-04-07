import React, { FC } from 'react';
import classes from './ProductCatalogItem.module.scss'
import { ProductState } from '../../types/products';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';

const ProductCatalogItem: FC<ProductState> = ({id, image, title, price}) => {
    const router = useNavigate();
    return (
        <li className={classes.productCatalogItem}>
            <img width='100px' height='100px' src={image} alt='Картинка продукта'></img>
            <h3 className={classes.productCatalogItem__title}>{title}</h3>
            <p className={classes.productCatalogItem__price}>Цена: {price}</p>
            <MyButton onClick={()=>router(`/products/${id}`)}>Открыть</MyButton>
        </li>
    );
};

export default ProductCatalogItem;