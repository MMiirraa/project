import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import scss from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { 
    className ,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <button className={classNames(scss.Button, {}, [className, scss[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
