/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productFormReducer from './slices/productFormSlice';
import contentReducer from './slices/contentSlice';
import cartReducer from './slices/cartSlice';
import statusReducer from './slices/statusSlice';
import checkoutReducer from './slices/checkoutSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        content: contentReducer,
        statuses: statusReducer,
        productForm: productFormReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        search: searchReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
