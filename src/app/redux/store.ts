import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import statusReducer from './statusSlice';

export const store = configureStore({
    reducer: {
        content: contentReducer,
        statuses: statusReducer,
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
