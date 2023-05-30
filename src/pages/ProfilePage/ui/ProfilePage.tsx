import { profileReducer } from 'entities/Profile';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string;
    children?: ReactNode;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
   const {t} = useTranslation('profilePage')

    const {
        className,
    } = props

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
