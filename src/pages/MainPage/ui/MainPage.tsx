import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
