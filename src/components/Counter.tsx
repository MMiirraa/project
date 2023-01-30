import React from 'react'
import scss from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={scss.btn}>
      <h1>{ count }</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
