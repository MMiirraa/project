import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency: (currency: Currency) => void;
    onChangeCountry: (cuntry: Country) => void;
}


export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUserName,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if(isLoading) {
        return(
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    };

    if(error) {
        return(
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text 
                    theme={TextTheme.ERROR} 
                    title={t('Произошла ошибка')} 
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    };

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && 
                    (<div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="нет картинки"/>
                    </div>)
                }
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect 
                    className={cls.input}
                    value={data?.currency} 
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect 
                    className={cls.input}
                    value={data?.country} 
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
