import React, { ReactNode, useEffect } from 'react';
import { Reducer, ThunkDispatch } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children?: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
   const {
       children,
       reducers,
       removeAfterUnmount,
   } = props
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const store = useStore() as ReduxStoreWithManager;


   useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                if(removeAfterUnmount) {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                }
            })

        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
