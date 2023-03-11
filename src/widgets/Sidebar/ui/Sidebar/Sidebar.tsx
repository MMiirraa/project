import React from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import scss from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const {
        className,
        ...otherProps
    } = props;
    const { t } = useTranslation(['mainPage', 'about']);
    const [collapsed, setCollapsed] = React.useState(false);
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(scss.Sidebar, { [scss.collapsed]: collapsed }, [className])}
        >
            <Button 
                data-testid="sidebar-toggle" 
                onClick={onToggle}
                className={scss.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={scss.items}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.main} 
                    className={scss.item}
                >
                    <MainIcon className={scss.icon}/>
                    <span className={scss.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.about}
                    className={scss.item}
                >
                    <AboutIcon className={scss.icon}/>
                    <span className={scss.link}>
                        {t('О сайте', { ns: 'about' })}
                    </span>
                </AppLink>
            </div>
            <div className={scss.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    short={collapsed} 
                    className={scss.lang} 
                />
            </div>
        </div>
    );
};
