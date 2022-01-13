/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentTypeFull } from '../dataTypes';
import type { RootState } from '../store';

type ProductFormState = {
    currentProduct: ContentTypeFull | null;
    amount: number;
    activeSize: string;
};

const initialState: ProductFormState = {
    currentProduct: null,
    amount: 1,
    activeSize: '',
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
        setActiveSize: (state, action: PayloadAction<string>) => {
            state.activeSize = action.payload;
        },
    },
});

export const {
    setCurrentProduct, increase, decrease, setActiveSize,
} = productFormSlice.actions;

export const selectCurrentProduct = (state: RootState) => state.productForm.currentProduct;
export const selectAmount = (state: RootState) => state.productForm.amount;
export const selectActiveSize = (state: RootState) => state.productForm.activeSize;

export default productFormSlice.reducer;
