import React, { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const countryOptions = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
]

export const CountrySelect: React.FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {t} = useTranslation()

    const {
        className,
        value,
        readonly,
        onChange,
    } = props

    const onChangeHandler = useCallback((value: string) => {
        return onChange?.(value as Country)
    }, [onChange])

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Укажите страну')} 
            options={countryOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
