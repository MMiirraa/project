import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import scss from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(scss.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
