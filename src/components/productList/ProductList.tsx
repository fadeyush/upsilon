import React, { FC, useEffect } from 'react';
import classes from './ProductList.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/action-creator.ts/fetchProducts';
import ProductItem from '../productItem/ProductItem';

const ProductList: FC = () => {
    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.productReducer);

    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])
    
    return (
        <section>
            {isLoading && <h2>Загрузка...</h2>}
            {error && <h2>{error}</h2>}
            <h2 className={classes.productList__title}>Карточки товаров</h2>
            <ul className={classes.productList}>    
                {products.map(product=>
                    <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                )}
            </ul>
        </section>
    );
};

export default ProductList;