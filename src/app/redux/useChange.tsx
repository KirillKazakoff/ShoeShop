import React from 'react';
import { changeInput } from './slices/checkoutSlice';
import { useAppDispatch } from './reduxHooks';

export default function useChange() {
    const dispatch = useAppDispatch();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changedInput = {
            name: event.currentTarget.name,
            value: event.currentTarget.value,
        };
        dispatch(changeInput(changedInput));
    };

    return onChange;
}
