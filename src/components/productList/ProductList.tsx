import React, { FC, useEffect } from 'react';
import classes from './ProductList.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductList } from '../../store/action-creator.ts/fetchProducts';

const ProductList: FC = () => {
    const {productsList, isLoading, error} = useAppSelector(state => state.productListReducer);
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchProductList())
    }, [])
    return (
        <ul className={classes.productList}>
            {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            productsList.map(product =>
                <li key={product.id}>{product.id} - {product.title}</li>
            )}
        </ul>
    );
};

export default ProductList;