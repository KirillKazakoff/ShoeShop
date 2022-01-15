import React from 'react';
import { changeInput } from './slices/checkoutSlice';
import { useAppDispatch } from './reduxHooks';

export type OnChangeField = (event: React.ChangeEvent<HTMLInputElement>) => void;

export default function useChange() {
    const dispatch = useAppDispatch();

    const onChange: OnChangeField = (event) => {
        const changedInput = {
            name: event.currentTarget.name,
            value: event.currentTarget.value,
        };
        dispatch(changeInput(changedInput));
    };

    return onChange;
}
