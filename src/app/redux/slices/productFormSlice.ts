/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentTypeFull } from '../dataTypes';
import type { RootState } from '../store';

type ProductFormState = {
    currentProduct: ContentTypeFull | null;
    amount: number;
    activeSizeIndex: number | null;
};

const initialState: ProductFormState = {
    currentProduct: null,
    amount: 1,
    activeSizeIndex: null,
};

export const productFormSlice = createSlice({
    name: 'productForm',
    initialState,
    reducers: {
        setCurrentProduct: (state, action: PayloadAction<ContentTypeFull>) => {
            state.currentProduct = action.payload;
        },
        increase: (state) => {
            state.amount += 1;
        },
        decrease: (state) => {
            state.amount -= 1;
        },
        setActiveSizeIndex: (state, action: PayloadAction<number>) => {
            state.activeSizeIndex = action.payload;
        },
    },
});

export const {
    setCurrentProduct, increase, decrease, setActiveSizeIndex,
} = productFormSlice.actions;

export const selectCurrentProduct = (state: RootState) => state.productForm.currentProduct;
export const selectAmount = (state: RootState) => state.productForm.amount;
export const selectActiveSizeIndex = (state: RootState) => state.productForm.activeSizeIndex;

export default productFormSlice.reducer;
