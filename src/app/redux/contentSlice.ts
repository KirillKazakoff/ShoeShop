/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType, ContentTypeFull } from '../data/initContent';
import type { RootState } from './store';

export interface ContentState {
    items: ContentType[];
    item: ContentTypeFull | null;
    topSalesItems: ContentType[];
    categories: string[];
    filter: string;
}

const initialState: ContentState = {
    items: [],
    topSalesItems: [],
    categories: [],
    item: null,
    filter: '',
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ContentType[]>) => {
            state.items = action.payload;
        },
        setTopSalesItems: (state, action: PayloadAction<ContentType[]>) => {
            state.topSalesItems = action.payload;
        },
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        setItem: (state, action: PayloadAction<ContentTypeFull>) => {
            state.item = action.payload;
        },
    },
});

export const { setItems, setCategories, setTopSalesItems, setItem } = contentSlice.actions;

export const selectItems = (state: RootState) => state.content.items;
export const selectTopSales = (state: RootState) => state.content.topSalesItems;
export const selectItem = (state: RootState) => state.content.item;

export default contentSlice.reducer;
