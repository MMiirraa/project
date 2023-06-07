import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import React, { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string;
    children?: ReactNode;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch();

    const {
        className,
    } = props

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
