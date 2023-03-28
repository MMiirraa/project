import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decremented()),
        ).toEqual({ value: 9 });
    });
    test('incremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.incremented()),
        ).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(undefined, counterActions.incremented()),
        ).toEqual({ value: 1 });
    });
});
