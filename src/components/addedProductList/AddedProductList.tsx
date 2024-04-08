import React, { FC } from 'react';
import classes from './AddedProductList.module.scss';
import { useAppSelector } from '../../hooks/redux';

const AddedProductList: FC = () => {
    const { addedProductList} = useAppSelector(state => state.addedProductReducer);
    const columnsName = [
        {Header: 'Дата создание',accessor: 'date',},{Header: 'Название',accessor: 'title',},{ Header: 'Цена',accessor: 'price',},{Header: 'Описание',accessor: 'description',},{Header: 'Опубликовано',accessor: 'isPublished',}];

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
                    <tr className={classes.AddedProductList__info}>
                         <td key={product.titleAddProduct}>{product.dateAddProduct}</td>
                         <td key={product.titleAddProduct}>{product.titleAddProduct}</td>
                         <td key={product.titleAddProduct}>{product.priceAddProduct}</td>
                         <td key={product.titleAddProduct}>{product.descriptionAddProduct}</td>
                         <td key={product.titleAddProduct}>{product.isAddProductPublished ? 'да' : 'нет'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default AddedProductList;