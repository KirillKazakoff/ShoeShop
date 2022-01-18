/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type SearchState = {
    value: string;
    isHidden: boolean;
};

const initialState: SearchState = {
    value: '',
    isHidden: true,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchHidden: (state, action: PayloadAction<boolean>) => {
            state.isHidden = action.payload;
        },
        toggleSearchHidden: (state) => {
            // const {isHidden, value} = state;
            // if (isHidden) state.isHidden = false;
            // else if (value)
        },
        setSearchInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setSearchHidden, setSearchInput, toggleSearchHidden } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;
export const selectFilter = (state: RootState) => state.search.value;

export default searchSlice.reducer;
