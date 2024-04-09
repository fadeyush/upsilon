import React, { FC, useEffect, useState } from 'react';
import classes from '../styles/editProduct.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';
import { AddProductProps } from '../types/addproduct';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDeleteProduct, fetchEditProduct } from '../store/action-creator.ts/fetchProducts';

const EditProduct: FC = () => {
    const {register, setValue, handleSubmit, reset} = useForm<AddProductProps>();
    const addedProductListfromLocal: AddProductProps[] = JSON.parse(localStorage.getItem('addedProductList')!) || [];
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const params: string = useParams()?.id! || '';
    const addedProduct:AddProductProps = addedProductListfromLocal.find(product =>product.idAddProduct === params)!;
    const router = useNavigate();
    
    useEffect(()=> {
        setValue('titleAddProduct', addedProduct.titleAddProduct)
        setValue('priceAddProduct', addedProduct.priceAddProduct)
        setValue('descriptionAddProduct', addedProduct.descriptionAddProduct)
        setValue('isAddProductPublished', addedProduct.isAddProductPublished)
    })
    const submit: SubmitHandler<AddProductProps> = (date) => {
        dispatch(fetchEditProduct(params, date));
        setModalEdit(true)
        reset();
    }
    
    const handleDeleteProduct = () => {
        dispatch(fetchDeleteProduct(params))
        router(`/products`)
        setModalDelete(false)
    };

    const handleDeleteProductModal = () => {
        setModalDelete(true)
    };

    const handleResetDeleteProductModal = () => {
        setModalDelete(false)
    };

    return (
        <main>
            <h1 className={classes.MyForm__title}>Форма редактирования продукта</h1>
            <form className={classes.MyForm} onSubmit={handleSubmit(submit)}>
                <label className={classes.MyForm__label}>
                    Название продукта: 
                    <input className={classes.MyForm__input} type='text' {...register('titleAddProduct', {required: true})}/>
                </label>
                <label className={classes.MyForm__label}>
                    Цена (в руб.): 
                    <input className={classes.MyForm__input} type='number' {...register('priceAddProduct', {required: true})}/>
                </label>
                <label className={classes.MyForm__label}>
                    Описание продукта: 
                    <textarea className={classes.MyForm__textarea} {...register('descriptionAddProduct', {required: true})}/>
                </label>
                <label className={classes.MyForm__label}>
                    Опубликован:   
                    <input className={classes.MyForm__checkbox} type='checkbox' {...register('isAddProductPublished')}/>
                </label>
                <div>
                <MyButton className={classes.MyForm__buttonEdit}>Отредактировать продукт</MyButton> 
                </div>
            </form>
            
            <MyButton onClick={()=>handleDeleteProductModal()} className={classes.MyForm__buttonDelete}>Удалить продукт</MyButton>
            <MyModal visible={modalDelete} setVisible={setModalDelete}>
                Вы действительно хотите удалить товар?
                <div>
                    <MyButton onClick={handleDeleteProduct}>Удалить</MyButton>
                    <MyButton onClick={handleResetDeleteProductModal}>Отменить</MyButton>
                </div>
            </MyModal>
            
            <MyModal visible={modalEdit} setVisible={setModalEdit}>Продукт отредактирован!</MyModal>
        </main>
    );
};

export default EditProduct;