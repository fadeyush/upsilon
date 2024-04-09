import React, { FC, useEffect, useState } from 'react';
import classes from './AddedProductList.module.scss';
import Switch from '@mui/material/Switch';
import { AddProductProps } from '../../types/addproduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addedProductSlice } from '../../store/reducers/AddedProductSlice';
import { fetchDeleteProduct } from '../../store/action-creator.ts/fetchProducts';

const AddedProductList: FC = () => {
    const {addedProductList} = useAppSelector(state => state.addedProductReducer);
    const dispatch = useAppDispatch();
    const addedProductListfromLocal: AddProductProps[] = JSON.parse(localStorage.getItem('addedProductList')!) || [];
    const [checked, setChecked] = React.useState(false);
    const publishedaddedProductList: AddProductProps[] = addedProductListfromLocal.filter(product=>product.isAddProductPublished === true);
    const notPublishedaddedProductList: AddProductProps[] = addedProductListfromLocal.filter(product=>product.isAddProductPublished === false);

    useEffect(()=> {
        if(addedProductListfromLocal.length && !addedProductList.length) {
            dispatch(addedProductSlice.actions.addProductsFromLocal(addedProductListfromLocal))
        }
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const columnsName = [{Header: 'Дата создание',accessor: 'date',},{Header: 'Название',accessor: 'title',},{ Header: 'Цена',accessor: 'price',},{Header: 'Описание',accessor: 'description',},{Header: 'Опубликовано',accessor: 'isPublished'}];

    return (
        <section className={classes.AddedProductList}>
            <div className={classes.AddedProductList__toggleSwitch}>
                <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
            </div>
            <table className={classes.AddedProductList__table}>
                <thead>
                    <tr>
                        {columnsName.map(columnName=>
                            <th className={classes.AddedProductList__head} key={columnName.accessor}>{columnName.Header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {checked ? 
                    publishedaddedProductList.map(product=>
                        <tr key={product.idAddProduct} className={classes.AddedProductList__info}>
                            <td className={classes.AddedProductList__date}>{product.dateAddProduct}</td>
                            <td>{product.titleAddProduct}</td>
                            <td>{product.priceAddProduct}</td>
                            <td>{product.descriptionAddProduct}</td>
                            <td>{product.isAddProductPublished ? 'да' : 'нет'}</td>
                            <td onClick={()=>{ dispatch(fetchDeleteProduct(product.idAddProduct))}} className={classes.AddedProductList__delete} id={product.idAddProduct}>x</td>
                        </tr>
                    )
                     :
                     notPublishedaddedProductList.map(product=>
                        <tr id={product.idAddProduct} key={product.idAddProduct} className={classes.AddedProductList__info}>
                            <td className={classes.AddedProductList__date}>{product.dateAddProduct}</td>
                            <td>{product.titleAddProduct}</td>
                            <td>{product.priceAddProduct}</td>
                            <td>{product.descriptionAddProduct}</td>
                            <td>{product.isAddProductPublished ? 'да' : 'нет'}</td>
                            <td onClick={()=>{ dispatch(fetchDeleteProduct(product.idAddProduct))}} className={classes.AddedProductList__delete}>x</td>
                        </tr>
                     )
                    }
                </tbody>
            </table>
        </section>
        
    );
};

export default AddedProductList;