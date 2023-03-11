import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import scss from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(scss.Navbar, {}, [className])}>

            <div className={scss.links}>
                /
            </div>
        </div>
    );
};
