import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import scss from './Navbar.module.scss'

interface NavbarProps {
  className?: string,
}

export const Navbar = (props: NavbarProps) => {
  const { 
    className
  } = props

  return (
    <div className={classNames(scss.Navbar, {}, [className])}>
    
      <div className={scss.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={scss.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};
