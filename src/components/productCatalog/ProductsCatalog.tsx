import React, { FC, useEffect, useState } from 'react';
import classes from './ProductsCatalog.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ProductItem from '../productItem/ProductItem';
import { ButtonArrProps } from '../../types/button';
import { fetchProducts } from '../../store/action-creator.ts/fetchProducts';
import MyButton from '../UI/button/MyButton';

const ProductsCatalog: FC = () => {
    const {products, isLoading, error} = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch()
    const [catalogItemCount, setCatalogItemCount] = useState<number>(8);
    const buttonArr: ButtonArrProps[] = [
        {count: 8},
        {count: 16},
        {count: 20},
    ]
    
    useEffect(()=> {
        dispatch(fetchProducts(catalogItemCount))
    }, [catalogItemCount]);

    function changeEuroChecked(e: React.MouseEvent<HTMLButtonElement>, count: number) {
        e.preventDefault();
        setCatalogItemCount(count)
    }

    return (
        <section className={classes.productsCatalog}>
            <h2 className={classes.productsCatalog__title}>Карточки товаров</h2>
            <div  className={classes.productsCatalog__buttonWrapper}>
                {buttonArr.map(button=>
                    <MyButton onClick={(e)=>changeEuroChecked(e, button.count)} key={button.count}>Загрузить {button.count} товаров</MyButton>
                )}
            </div>
            {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            <ul className={classes.productsCatalog__list}>    
                {products.map(product=>
                    <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
                )}
            </ul>
            }
        </section>
    );
};

export default ProductsCatalog;