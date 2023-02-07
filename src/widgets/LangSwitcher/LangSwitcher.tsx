import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import scss from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
  const {
    className,
    ...otherProps
  } = props


  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button 
      className={classNames(scss.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR} 
      onClick={toggle}
    >
        {t('Язык')}
    </Button>
  );
};
