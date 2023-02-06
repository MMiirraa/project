import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
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
    <ThemeSwitcher />
      <div className={scss.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={scss.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};