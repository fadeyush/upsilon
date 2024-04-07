import React, { FC } from 'react';
import { ButtonProps } from '../../../types/button';
import classs from './MyButton.module.scss';

const MyButton: FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className={classs.MyButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;