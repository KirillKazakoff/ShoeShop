/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InputField } from '../dataTypes';
import type { RootState } from '../store';

export type InputState = Omit<InputField, 'name'> & {
    wasFocused: boolean;
};

type PayloadFocus = {
    wasFocused: boolean;
    name: string;
};

export type CheckoutState = {
    [key: string]: InputState;

    phone: InputState;
    address: InputState;
};

const inititalInput: InputState = {
    value: '',
    isValid: undefined,
    error: undefined,
    wasFocused: false,
};

const initialState: CheckoutState = {
    phone: inititalInput,
    address: inititalInput,
};

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<InputField>) => {
            const { name, value, isValid, error } = action.payload;

            state[name].value = value;
            state[name].isValid = isValid;
            state[name].error = error;
            // console.log(state[name].error, state[name].isValid, state[name].wasFocused);
        },
        setBlured: (state, action: PayloadAction<PayloadFocus>) => {
            const { name, wasFocused } = action.payload;
            state[name].wasFocused = wasFocused;
            return state;
        },
        updateForm: (state, action: PayloadAction<CheckoutState>) => action.payload,
        refreshCheckout: () => initialState,
    },
});

export const { changeInput, updateForm, refreshCheckout, setBlured } = checkoutSlice.actions;

export const selectCheckout = (state: RootState) => state.checkout;
export const selectOwner = (state: RootState) => ({
    phone: state.checkout.phone.value,
    address: state.checkout.address.value,
});

export default checkoutSlice.reducer;
