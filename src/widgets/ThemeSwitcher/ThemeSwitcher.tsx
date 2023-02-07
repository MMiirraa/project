import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/LightIcon.svg'
import DarkIcon from 'shared/assets/icons/DarkIcon.svg'
import scss from './ThemeSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
const { className } = props
const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(scss.ThemeSwitcher, {}, [className])} 
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
