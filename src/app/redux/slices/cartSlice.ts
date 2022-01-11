/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType, ContentTypeFull, CategoryType } from '../dataTypes';
import type { RootState } from '../store';

export type CartState = {
    product: ContentTypeFull | null;
};

const initialState: CartState = {
    product: null,
};

export const cartSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<ContentTypeFull>) => {
            state.product = action.payload;
        },
    },
});

export const { setProduct } = cartSlice.actions;
export const selectProduct = (state: RootState) => state.cart.product;

export default cartSlice.reducer;
