/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type StatusState = {
    productFormStatus: Status;
    topSalesItemsStatus: Status;
    itemsStatus: Status;
    categoriesStatus: Status;
    totalOrderStatus: Status;
    cartStatus: Status;
};

const initialState: StatusState = {
    productFormStatus: 'idle',
    topSalesItemsStatus: 'idle',
    itemsStatus: 'idle',
    categoriesStatus: 'idle',
    totalOrderStatus: 'idle',
    cartStatus: 'idle',
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setProductFormStatus: (state, action: PayloadAction<Status>) => {
            state.productFormStatus = action.payload;
        },
        setItemsStatus: (state, action: PayloadAction<Status>) => {
            state.itemsStatus = action.payload;
        },
        setCategoriesStatus: (state, action: PayloadAction<Status>) => {
            state.categoriesStatus = action.payload;
        },
        setTopSalesItemsStatus: (state, action: PayloadAction<Status>) => {
            state.topSalesItemsStatus = action.payload;
        },
        setTotalOrderStatus: (state, action: PayloadAction<Status>) => {
            state.totalOrderStatus = action.payload;
        },
        setCartStatus: (state, action: PayloadAction<Status>) => {
            state.cartStatus = action.payload;
        },
    },
});

export const {
    setProductFormStatus,
    setTopSalesItemsStatus,
    setItemsStatus,
    setCategoriesStatus,
    setTotalOrderStatus,
    setCartStatus,
} = statusSlice.actions;

export const selectProductFormStatus = (state: RootState) => state.statuses.productFormStatus;
export const selectItemsStatus = (state: RootState) => state.statuses.itemsStatus;
export const selectCategoriesStatus = (state: RootState) => state.statuses.categoriesStatus;
export const selectTopSalesItemsStatus = (state: RootState) => state.statuses.topSalesItemsStatus;
export const selectTotalOrderStatus = (state: RootState) => state.statuses.totalOrderStatus;
export const selectCartStatus = (state: RootState) => state.statuses.cartStatus;

export default statusSlice.reducer;
