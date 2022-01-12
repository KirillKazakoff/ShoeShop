/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type StatusState = {
    productFormStatus: Status;
    topSalesItemsStatus: Status;
    itemsStatus: Status;
    categoriesStatus: Status;
};

const initialState: StatusState = {
    productFormStatus: 'idle',
    topSalesItemsStatus: 'idle',
    itemsStatus: 'idle',
    categoriesStatus: 'idle',
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
    },
});

export const {
    setProductFormStatus,
    setTopSalesItemsStatus,
    setItemsStatus,
    setCategoriesStatus,
} = statusSlice.actions;

export const selectFormStatus = (state: RootState) => state.statuses.productFormStatus;
export const selectItemsStatus = (state: RootState) => state.statuses.itemsStatus;
export const selectCategoriesStatus = (state: RootState) => state.statuses.categoriesStatus;
export const selectTopSalesItemsStatus = (state: RootState) => state.statuses.topSalesItemsStatus;

export default statusSlice.reducer;