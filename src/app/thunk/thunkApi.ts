import { setCurrentProduct } from '../redux/slices/productFormSlice';
import { setCategories, setItems, setTopSalesItems } from '../redux/slices/contentSlice';
import {
    setCategoriesStatus,
    setItemsStatus,
    setProductFormStatus,
    setTopSalesItemsStatus,
    setTotalOrderStatus,
} from '../redux/slices/statusSlice';
import { AppThunk } from '../redux/store';
import { request, getItemsUrl, RequestObj } from './thunkUtils';
import { TotalOrder, Owner } from '../redux/dataTypes';

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

export const getItem = (id: string): AppThunk => async (dispatch) => {
    dispatch(setProductFormStatus('loading'));

    const reqObj = { url: `items/${id}`, settings: undefined };
    const res = await dispatch(request(reqObj, setProductFormStatus));

    if (!res) return false;

    const resData = await res.json();
    dispatch(setCurrentProduct(resData));

    dispatch(setProductFormStatus('loaded'));
    return true;
};

export const postTotalOrder = (owner: Owner): AppThunk => async (dispatch, getState) => {
    dispatch(setTotalOrderStatus('loading'));

    const items = getState().cart.orders.map((item) => ({
        id: item.id,
        price: item.price,
        count: item.amount,
    }));
    const total: TotalOrder = { owner, items };

    const reqObj: RequestObj = {
        url: 'order',
        settings: {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(total),
        },
    };
    const res = await dispatch(request(reqObj, setTotalOrderStatus));

    if (!res) return false;
    dispatch(setTotalOrderStatus('loaded'));
    return true;
};
