import React, { ChangeEvent, ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = (props: SelectProps) => {
    const {t} = useTranslation()

    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option className={cls.otions} value={opt.value} key={opt.value}>{opt.content}</option>
        ))
    }, [options])

    const onChangeHendler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {

    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select 
                disabled={readonly} 
                className={cls.select} 
                value={value} 
                onChange={onChangeHendler}
            >
                {optionsList}
            </select>
        </div>
    );
};
