import React, { ReactNode } from 'react';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
    children?: ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
   const {t} = useTranslation('profile')

   const {
       className,
   } = props

   const data = useSelector(getProfileData)
   const isLoading = useSelector(getProfileIsLoading)
   const error = useSelector(getProfileError)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input 
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input 
                    value={data?.first}
                    placeholder={t('Ваше фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
