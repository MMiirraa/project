
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss'

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/about'}  element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};

export default App;