import React, { FC, useEffect } from 'react';
import classes from '../styles/productItem.module.scss';
import { useParams } from 'react-router-dom';
import { fetchProductItem } from '../store/action-creator.ts/fetchProducts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const ProductItem: FC = () => {
    const {productItem, isLoading, error} = useAppSelector(state => state.productItemReducer);
    const params = useParams();
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchProductItem(params?.id!));
    }, [])

    return (
        <main className={classes.productItem}>
            <h1 className={classes.productItem__header}>
                Страница поста c ID - {params.id}
            </h1>
            {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            <section>
                <div className={classes.productItem__wrapper}>
                    <img src={productItem.image}></img>
                    <div className={classes.productItem__Infowrapper}>
                        <h3 className={classes.productItem__title}>{productItem.title}</h3>
                        <p className={classes.productItem__price}>Цена: {productItem.price}</p>
                        <p className={classes.productItem__description}>{productItem.description}</p>
                        <p>Категория товара: {productItem.category}</p>
                    </div>
                </div>
            </section> 
            }
        </main>
    );
};

export default ProductItem;