/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type StatusState = {
    formStatus: Status;
    topSalesItemsStatus: Status;
    itemsStatus: Status;
    categoriesStatus: Status;
    catalogStatus: Status;
};

const initialState: StatusState = {
    formStatus: 'idle',
    topSalesItemsStatus: 'idle',
    itemsStatus: 'idle',
    categoriesStatus: 'idle',
    catalogStatus: 'idle',
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setFormStatus: (state, action: PayloadAction<Status>) => {
            state.formStatus = action.payload;
        },
        setItemsStatus: (state, action: PayloadAction<Status>) => {
            state.itemsStatus = action.payload;
        },
        setCategoriesStatus: (state, action: PayloadAction<Status>) => {
            state.categoriesStatus = action.payload;
        },
        setCatalogStatus: (state, action: PayloadAction<Status>) => {
            state.catalogStatus = action.payload;
        },
        setTopSalesItemsStatus: (state, action: PayloadAction<Status>) => {
            state.topSalesItemsStatus = action.payload;
        },
    },
});

export const {
    setFormStatus,
    setTopSalesItemsStatus,
    setItemsStatus,
    setCategoriesStatus,
    setCatalogStatus,
} = statusSlice.actions;

export const selectFormStatus = (state: RootState) => state.statuses.formStatus;
export const selectItemsStatus = (state: RootState) => state.statuses.itemsStatus;
export const selectCategoriesStatus = (state: RootState) => state.statuses.categoriesStatus;
export const selectTopSalesItemsStatus = (state: RootState) => state.statuses.topSalesItemsStatus;
export const selectCatalogStatus = (state: RootState) => state.statuses.catalogStatus;

export default statusSlice.reducer;
