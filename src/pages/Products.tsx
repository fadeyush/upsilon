import React, { FC, useEffect} from 'react';
import MyTabPanel from '../components/tabs/MyTabPanel';
import { useAppDispatch } from '../hooks/redux';
import { fetchProductList, fetchProducts } from '../store/action-creator.ts/fetchProducts';

const Products: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchProductList())
        dispatch(fetchProducts(8))
    }, [])
    return (
        <main>
            <MyTabPanel/>
        </main>
    );
};

export default Products;