/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType, ContentTypeFull, CategoryType } from '../data/initContent';
import type { RootState } from './store';

export interface ContentState {
    items: ContentType[];
    item: ContentTypeFull | null;
    topSalesItems: ContentType[];
    categories: CategoryType[];
    category: CategoryType;
    filter: string;
}

const initialState: ContentState = {
    items: [],
    item: null,
    topSalesItems: [],
    categories: [],
    category: {
        id: 0,
        title: 'Все',
    },
    filter: '',
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ContentType[]>) => {
            state.items = action.payload;
        },
        setItem: (state, action: PayloadAction<ContentTypeFull>) => {
            state.item = action.payload;
        },
        setTopSalesItems: (state, action: PayloadAction<ContentType[]>) => {
            state.topSalesItems = action.payload;
        },
        setCategories: (state, action: PayloadAction<CategoryType[]>) => {
            state.categories = action.payload;
        },
        setCategory: (state, action: PayloadAction<CategoryType>) => {
            state.category = action.payload;
        },
    },
});

export const { setItems, setCategories, setCategory, setTopSalesItems, setItem } = contentSlice.actions;

export const selectItems = (state: RootState) => state.content.items;
export const selectTopSales = (state: RootState) => state.content.topSalesItems;
export const selectItem = (state: RootState) => state.content.item;

export const selectCategories = (state: RootState) => [
    { id: 0, title: 'Все' },
    ...state.content.categories,
];
export const selectCategory = (state: RootState) => state.content.category;

export default contentSlice.reducer;
