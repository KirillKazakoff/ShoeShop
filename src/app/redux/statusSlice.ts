/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type StatusState = {
    formStatus: Status;
    catalogStatus: Status;
    categoriesStatus: Status;
};

const initialState: StatusState = {
    formStatus: 'idle',
    catalogStatus: 'idle',
    categoriesStatus: 'idle',
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setFormStatus: (state, action: PayloadAction<Status>) => {
            state.formStatus = action.payload;
        },
        setCatalogStatus: (state, action: PayloadAction<Status>) => {
            state.catalogStatus = action.payload;
        },
        setCategoriesStatus: (state, action: PayloadAction<Status>) => {
            state.categoriesStatus = action.payload;
        },
    },
});

export const { setFormStatus, setCatalogStatus, setCategoriesStatus } = statusSlice.actions;

export const selectFormStatus = (state: RootState) => state.statuses.formStatus;
export const selectCatalogStatus = (state: RootState) => state.statuses.catalogStatus;
export const selectCategoriesStatus = (state: RootState) => state.statuses.categoriesStatus;

export default statusSlice.reducer;
