/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type SearchState = {
    value: string;
    filter: string;
    isHidden: boolean;
};

const initialState: SearchState = {
    value: '',
    filter: '',
    isHidden: true,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchHidden: (state, action: PayloadAction<boolean>) => {
            state.isHidden = action.payload;
            state.filter = '';
        },
        setSearchFilter: (state) => {
            state.filter = state.value;
        },
        setSearchInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setSearchHidden, setSearchInput, setSearchFilter } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;
export const selectFilter = (state: RootState) => state.search.filter;

export default searchSlice.reducer;
