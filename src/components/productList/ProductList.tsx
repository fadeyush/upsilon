import React, { FC, useEffect, useMemo, useState } from 'react';
import classes from './ProductList.module.scss'
import { useAppSelector } from '../../hooks/redux';

const ProductList: FC = () => {
    const {productsList, isLoading, error} = useAppSelector(state => state.productListReducer);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const searchPosts = useMemo(()=>{
        return productsList.filter(product=> product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, productsList]);
    
    return (
        <>
            <input className={classes.productList__search} placeholder='Поиск...' value = {searchQuery} onChange={e => setSearchQuery(e.target.value)}
            type='text'></input>
            <ul className={classes.productList}>
                {isLoading ?  
                    <h2>Загрузка...</h2> : 
                error ? 
                    <h2>{error}</h2> 
                :
                searchPosts.map(product =>
                    <li key={product.id}>{product.id} - {product.title}</li>
                )}
            </ul>
        </>
    );
};

export default ProductList;