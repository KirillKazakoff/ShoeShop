/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { changeInput, setBlured } from './slices/checkoutSlice';
import { useAppDispatch } from './reduxHooks';
import { InputField } from './dataTypes';

export type OnChangeField = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type OnBlurField = (e: React.FocusEvent<HTMLInputElement>) => void;

export default function useChange() {
    const dispatch = useAppDispatch();

    const getValidity = (input: HTMLInputElement) => {
        const validity = input.validity as ValidityState & {
            [key: string]: boolean;
        };

        if (validity.valid) {
            return {
                isValid: true,
                error: undefined,
            };
        }

        let error;
        for (const key in validity) {
            if (validity[key]) {
                error = key;
            }
        }

        return {
            isValid: false,
            error,
        };
    };

    const onChange: OnChangeField = (e) => {
        const validity = getValidity(e.currentTarget);
        const changedInput: InputField = {
            name: e.currentTarget.name,
            value: e.currentTarget.value,
            ...validity,
        };

        dispatch(changeInput(changedInput));
    };

    const onBlur: OnBlurField = (e) => {
        dispatch(setBlured({ name: e.currentTarget.name, wasFocused: true }));
    };
    return [onChange, onBlur];
}
