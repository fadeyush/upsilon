import React, { FC } from 'react';
import { ButtonProps } from '../../../types/button';
import classs from './MyButton.module.scss';

const MyButton: FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button className={className? `${classs.MyButton} ${className}`: `${classs.MyButton}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;