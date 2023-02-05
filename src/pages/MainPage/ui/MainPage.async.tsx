import React from 'react';
export const MainPageAsync = React.lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('../ui/MainPage')), 1500)
}));
