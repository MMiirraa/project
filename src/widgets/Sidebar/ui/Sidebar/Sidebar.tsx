import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import scss from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const {
    className,
    ...otherProps
  } = props

  const [collapsed, setCollapsed] = React.useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div className={classNames(scss.Sidebar, {[scss.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>TOGLE</button>
      <div className={scss.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
