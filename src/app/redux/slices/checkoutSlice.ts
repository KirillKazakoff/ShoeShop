/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InputState } from '../dataTypes';
import type { RootState } from '../store';

export type CheckoutState = {
    [key: string]: string | boolean;

    phone: string;
    address: string;
    agreement: boolean;
};

const initialState: CheckoutState = {
    phone: '',
    address: '',
    agreement: false,
};

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<InputState>) => {
            const { name, value } = action.payload;
            state[name] = typeof state[name] === 'boolean' ? !state[name] : value;
        },
        updateForm: (state, action: PayloadAction<CheckoutState>) => action.payload,
        refreshForm: () => initialState,
    },
});

export const { changeInput, updateForm, refreshForm } = checkoutSlice.actions;
export const selectCheckout = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;
