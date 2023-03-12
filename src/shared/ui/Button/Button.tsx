import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import scss from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',

}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    type?: 'button' | 'submit' | 'reset';
    square?: boolean;
    size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        type = 'button',
        square,
        size = ButtonSize.L,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [scss.square]: square,
    };
    const additional = [
        scss[theme],
        scss[size],
    ];

    return (
        <button
            type={type}
            className={classNames(scss.Button, mods, [className, scss[theme], ...additional])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
