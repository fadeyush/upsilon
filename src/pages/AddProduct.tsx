import React, { FC, useEffect, useState } from 'react';
import classes from '../styles/addProduct.module.scss'
import { AddProductProps } from '../types/addproduct';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addedProductSlice } from '../store/reducers/AddedProductSlice';
import { fetchAddProduct } from '../store/action-creator.ts/fetchProducts';

const AddProduct: FC = () => {
    const {addedProductList} = useAppSelector(state => state.addedProductReducer);
    const {register, setValue, handleSubmit, reset} = useForm<AddProductProps>();
    const addedProductListfromLocal: AddProductProps[] = JSON.parse(localStorage.getItem('addedProductList')!) || [];
    const [modal, setModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const date = new Date();
    const dateForSubmit = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-${date.getFullYear()}`;

    useEffect(()=> {
        if(addedProductListfromLocal.length && !addedProductList.length) {
            dispatch(addedProductSlice.actions.addProductsFromLocal(addedProductListfromLocal))
        }
    })

    const submit: SubmitHandler<AddProductProps> = (date) => {
        dispatch(fetchAddProduct(date));
        setModal(true)
        reset();
    }

    function setProductValue() {
        setValue('dateAddProduct', dateForSubmit);
        setValue('idAddProduct', JSON.stringify(Date.now()))
    }
    return (
        <main>
            <h1 className={classes.MyForm__title}>Форма создания продукта</h1>
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
                <MyButton onClick={()=>setProductValue()} className={classes.MyForm__button}>Создать продукт</MyButton>
                <MyModal visible={modal} setVisible={setModal}>Продукт успешно создан!</MyModal>
            </form>
        </main>
    );
};

export default AddProduct;