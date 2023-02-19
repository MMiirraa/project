import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Louder } from 'shared/ui/Louder/Louder';
import scss from './PageLouder.module.scss';

interface PageLouderProps {
  className?: string;
}

export const PageLouder: React.FC<PageLouderProps> = (props: PageLouderProps) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(scss.PageLouder, {}, [className])}>
      <Louder />
    </div>
  );
};
