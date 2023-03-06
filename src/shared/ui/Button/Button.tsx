import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import scss from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            type={type}
            className={classNames(scss.Button, {}, [className, scss[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
