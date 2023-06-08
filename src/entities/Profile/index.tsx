export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfiledata/fetchProfiledata';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
