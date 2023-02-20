import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import scss from './PageError.module.scss'

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props: PageErrorProps) => {
  const { className } = props
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(scss.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
