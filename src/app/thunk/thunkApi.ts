import { setCategories, setItems, setTopSalesItems } from '../redux/slices/contentSlice';
import {
    setCategoriesStatus,
    setItemsStatus,
    setTopSalesItemsStatus,
} from '../redux/slices/statusSlice';
import { AppThunk } from '../redux/store';
import { request, getItemsUrl } from './thunkUtils';

type GetItemsType = (categoryId: number, offset?: number) => AppThunk<Promise<boolean>>;

export const getItems: GetItemsType = (categoryId, offset) => async (dispatch) => {
    dispatch(setItemsStatus('loading'));

    const url = getItemsUrl(categoryId, offset);

    const reqObj = { url, settings: undefined };
    const res = await dispatch(request(reqObj, setItemsStatus));

    if (!res) return false;

    const resData = await res.json();
    dispatch(setItems(resData));

    dispatch(setItemsStatus('loaded'));
    return true;
};

export const getTopSalesItems = (): AppThunk => async (dispatch) => {
    dispatch(setTopSalesItemsStatus('loading'));

    const reqObj = { url: 'top-sales', settings: undefined };
    const res = await dispatch(request(reqObj, setTopSalesItemsStatus));

    if (!res) return;

    const resData = await res.json();
    dispatch(setTopSalesItems(resData));

    dispatch(setTopSalesItemsStatus('loaded'));
};

export const getCategories = (): AppThunk<Promise<boolean>> => async (dispatch) => {
    dispatch(setCategoriesStatus('loading'));
    const reqObj = { url: 'categories', settings: undefined };
    const res = await dispatch(request(reqObj, setCategoriesStatus));

    if (!res) return false;

    const resData = await res.json();
    dispatch(setCategories(resData));

    dispatch(setCategoriesStatus('loaded'));
    return true;
};
