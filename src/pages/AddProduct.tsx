import React, { FC, useState } from 'react';
import classes from '../styles/addProduct.module.scss'
import { AddProductProps } from '../types/addproduct';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import { addProduct } from '../api/fetchProducts';
import MyModal from '../components/UI/modal/MyModal';
import { useAppDispatch } from '../hooks/redux';
import { addedProductSlice } from '../store/reducers/AddedProductSlice';

const AddProduct: FC = () => {
    const {register, setValue, handleSubmit, reset} = useForm<AddProductProps>();
    const addedProductList: AddProductProps[] = JSON.parse(localStorage.getItem('addedProductList')!) || [];
    const [modal, setModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const date = new Date();
    const dateForSubmit = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-${date.getFullYear()}`;

    useState(()=> {
        if(addedProductList.length) {
            dispatch(addedProductSlice.actions.addProductsFromLocal(addedProductList))
        }
    })

    const submit: SubmitHandler<AddProductProps> = async (date) => {
        addProduct(date);
        setModal(true)
        reset();
        dispatch(addedProductSlice.actions.addNewProduct(date));
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