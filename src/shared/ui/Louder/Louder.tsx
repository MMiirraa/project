import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Louder.scss';

interface LouderProps {
  className?: string;
}

export const Louder: React.FC<LouderProps> = (props: LouderProps) => {
  const { className } = props;
  return (
    <div className={classNames('lds-hourglass', {}, [className])} />
  );
};
