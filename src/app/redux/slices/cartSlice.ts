/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentTypeFull } from '../dataTypes';
import type { RootState } from '../store';

export type CartState = {
    currentProduct: ContentTypeFull | null;
    amount: number;
    activeSizeIndex: number | null;
};

const initialState: CartState = {
    currentProduct: null,
    amount: 1,
    activeSizeIndex: null,
};

export const cartSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setCurrentProduct: (state, action: PayloadAction<ContentTypeFull>) => {
            state.currentProduct = action.payload;
        },
        increase: (state) => {
            state.amount += 1;
        },
        decrease: (state) => {
            state.amount -= 1;
        },
        setActiveSizeIndex: (state, action: PayloadAction<number>) => {
            state.activeSizeIndex = action.payload;
        },
    },
});

export const {
    setCurrentProduct, increase, decrease, setActiveSizeIndex,
} = cartSlice.actions;

export const selectCurrentProduct = (state: RootState) => state.cart.currentProduct;
export const selectAmount = (state: RootState) => state.cart.amount;
export const selectActiveSizeIndex = (state: RootState) => state.cart.activeSizeIndex;

export default cartSlice.reducer;
