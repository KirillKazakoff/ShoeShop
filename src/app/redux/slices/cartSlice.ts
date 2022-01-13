/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentTypeCart } from '../dataTypes';
import type { RootState } from '../store';

type CartState = {
    orders: ContentTypeCart[];
};

const initialState: CartState = {
    orders: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<ContentTypeCart>) => {
            state.orders.push(action.payload);
        },
    },
});

export const { addOrder } = cartSlice.actions;
export const selectOrders = (state: RootState) => state.cart.orders;

export default cartSlice.reducer;
