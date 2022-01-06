import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { setCategories, setItems, setTopSalesItems } from '../redux/contentSlice';
import { setTableStatus, Status } from '../redux/statusSlice';
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

export const getItems = (): AppThunk => async (dispatch) => {
    dispatch(setTableStatus('loading'));

    const reqObj = { url: 'items', settings: undefined };
    const res = await dispatch(request(reqObj, setTableStatus));

    if (!res) return;

    const resData = await res.json();
    dispatch(setItems(resData));

    dispatch(setTableStatus('loaded'));
};

export const getTopSalesItems = (): AppThunk => async (dispatch) => {
    dispatch(setTableStatus('loading'));

    const reqObj = { url: 'top-sales', settings: undefined };
    const res = await dispatch(request(reqObj, setTableStatus));

    if (!res) return;

    const resData = await res.json();
    dispatch(setTopSalesItems(resData));

    dispatch(setTableStatus('loaded'));
};

export const getCategories = (): AppThunk => async (dispatch) => {
    dispatch(setTableStatus('loading'));

    const reqObj = { url: 'top-sales', settings: undefined };
    const res = await dispatch(request(reqObj, setTableStatus));

    if (!res) return;

    const resData = await res.json();
    dispatch(setCategories(resData));

    dispatch(setTableStatus('loaded'));
};
