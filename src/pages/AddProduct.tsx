import React, { FC, useState } from 'react';
import classes from '../styles/addProduct.module.scss'
import { AddProductProps } from '../types/addproduct';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import { addProduct } from '../api/fetchProducts';
import MyModal from '../components/UI/modal/MyModal';

const AddProduct: FC = () => {
    const {register, setValue, handleSubmit, reset} = useForm<AddProductProps>();
    const [modal, setModal] = useState<boolean>(false);

    const submit: SubmitHandler<AddProductProps> = async (date) => {
        addProduct(date);
        setModal(true)
        reset();
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
                <MyButton onClick={()=>setValue('dateAddProduct', new Date())} className={classes.MyForm__button}>Создать продукт</MyButton>
                <MyModal visible={modal} setVisible={setModal}>Продукт успешно создан!</MyModal>
            </form>
        </main>
    );
};

export default AddProduct;