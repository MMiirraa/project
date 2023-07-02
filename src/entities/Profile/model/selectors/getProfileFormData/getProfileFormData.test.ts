import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFormData } from './getProfileForm';

describe('getProfileFormData.test', () => {
    test('should return user form data', () => {
        const data = {
            username: 'admin',
            age: 30,
            country: Country.Russia,
            lastname: 'admin',
            first: 'admin',
            city: 'city',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: data,
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
