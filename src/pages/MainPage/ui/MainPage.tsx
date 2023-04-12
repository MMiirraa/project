import React, { useState } from 'react';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input
                onChange={onChange}
                value={value}
                placeholder=">"
            />
        </div>
    );
};

export default MainPage;
