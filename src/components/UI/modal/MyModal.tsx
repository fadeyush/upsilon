import React, { FC } from 'react';
import classes from './MyModal.module.scss';
import { ModalProps } from '../../../types/modal';

const MyModal: FC<ModalProps> = ({children, visible, setVisible, className}) => {
    return (
        <div className={visible ? `${classes.myModal} ${classes.myModal__active}` : classes.myModal} onClick={e=>setVisible(false)}>
            <div className={`${classes.myModal__content} ${className}`} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;