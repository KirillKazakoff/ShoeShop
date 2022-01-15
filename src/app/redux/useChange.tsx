import React from 'react';
import { changeInput } from './slices/checkoutSlice';
import { useAppDispatch } from './reduxHooks';

export type OnChangeField = (event: React.ChangeEvent<HTMLInputElement>) => void;

export default function useChange() {
    const dispatch = useAppDispatch();

    const getInputError = (input: HTMLInputElement) => {
        const field = Object.keys(ValidityState.prototype).find(
            (key) => input.validity[key],
        );
    };

    const onChange: OnChangeField = (e) => {
        const field = e.currentTarget;

        const changedInput = {
            name: e.currentTarget.name,
            value: e.currentTarget.value,
        };
        dispatch(changeInput(changedInput));
    };

    return onChange;
}
