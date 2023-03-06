import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import scss from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const {
        className,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = React.useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(scss.Sidebar, { [scss.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                {t("Переключить")}
            </Button>
            <div className={scss.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={scss.lang} />
            </div>
        </div>
    );
};
