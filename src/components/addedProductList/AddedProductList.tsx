import React, { FC, useState } from 'react';
import classes from './AddedProductList.module.scss';
import { AddProductProps } from '../../types/addproduct';

const AddedProductList: FC = () => {
    const addedProductList: AddProductProps[] = JSON.parse(localStorage.getItem('addedProductList')!) || [];

    const columnsName = [
        {Header: 'Дата создание',accessor: 'date',},{Header: 'Название',accessor: 'title',},{ Header: 'Цена',accessor: 'price',},{Header: 'Описание',accessor: 'description',},{Header: 'Опубликовано',accessor: 'isPublished'}];
    return (
        <table className={classes.AddedProductList}>
            <thead>
                <tr>
                    {columnsName.map(columnName=>
                         <th className={classes.AddedProductList__head} key={columnName.accessor}>{columnName.Header}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {addedProductList.map(product=>
                    <tr id={product.idAddProduct} key={product.idAddProduct} className={classes.AddedProductList__info}>
                         <td>{product.dateAddProduct}</td>
                         <td>{product.titleAddProduct}</td>
                         <td>{product.priceAddProduct}</td>
                         <td>{product.descriptionAddProduct}</td>
                         <td>{product.isAddProductPublished ? 'да' : 'нет'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default AddedProductList;