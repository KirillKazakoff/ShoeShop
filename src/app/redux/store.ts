import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import contentReducer from './slices/contentSlice';
import statusReducer from './slices/statusSlice';

export const store = configureStore({
    reducer: {
        content: contentReducer,
        statuses: statusReducer,
        cart: cartReducer,
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
