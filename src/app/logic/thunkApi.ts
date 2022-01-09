import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { setCategories, setItems, setTopSalesItems } from '../redux/contentSlice';
import {
    setCategoriesStatus,
    setItemsStatus,
    setFormStatus,
    setTopSalesItemsStatus,
    Status,
    setCatalogStatus,
} from '../redux/statusSlice';
import { AppThunk } from '../redux/store';

const baseUrl = 'http://localhost:7070';

function timeoutMock() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), 500);
    });
}

type RequestType = (
    reqObj: {
        url: string;
        settings: RequestInit | undefined;
    },
    setStatus: ActionCreatorWithPayload<Status, string>
) => AppThunk<Promise<false | Response>>;

const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    await timeoutMock();

    const res = await fetch(`${baseUrl}/api/${reqObj.url}`, reqObj.settings);
    if (!res.ok) {
        dispatch(setStatus('failed'));
        return false;
    }

    return res;
};

export const getItems = (categoryId: number): AppThunk<Promise<boolean>> => async (dispatch) => {
    dispatch(setItemsStatus('loading'));

    const url = categoryId === 0 ? 'items' : `items?categoryId=${categoryId}`;
    const reqObj = { url, settings: undefined };
    const res = await dispatch(request(reqObj, setCatalogStatus));

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

export const getCatalog = (id: number): AppThunk<Promise<boolean>> => async (dispatch) => {
    dispatch(setCatalogStatus('loading'));

    const resCategories = await dispatch(getCategories());
    const resItems = await dispatch(getItems(id));

    if (!resItems || !resCategories) {
        dispatch(setCatalogStatus('failed'));
        return false;
    }

    dispatch(setCatalogStatus('loaded'));
    return true;
};
