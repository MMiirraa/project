import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { 
    fetchProfileData,
    ProfileCard, 
    profileReducer, 
    getProfileIsLoading, 
    getProfileError, 
    profileActions,
    getProfileReadonly,
    getProfileFormData
} from 'entities/Profile';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const RgExpNumber = /^\d+$/;
const numberValidator = (str: string | undefined) => str ? /^\d+$/.test(str) : false;

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    const {
        className,
    } = props;

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            first: value || "",
        }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || "",
        }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        if(numberValidator(value)) {
            dispatch(profileActions.updateProfile({
                age: Number(value || 0),
            }))
        } else {
            alert("возраст должен быть числом")
        }
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value || "",
        }))
    }, [dispatch])

    const onChangeUserName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value || "",
        }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || "",
        }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({
            currency,
        }))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({
            country,
        }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard 
                    data={formData} 
                    isLoading={isLoading} 
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUserName={onChangeUserName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
