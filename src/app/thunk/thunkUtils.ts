import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Status } from '../redux/statusSlice';
import { AppThunk } from '../redux/store';

const baseUrl = 'http://localhost:7070';

function timeoutMock() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), 1000);
    });
}

type RequestType = (
    reqObj: {
        url: string;
        settings: RequestInit | undefined;
    },
    setStatus: ActionCreatorWithPayload<Status, string>
) => AppThunk<Promise<false | Response>>;

export const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    await timeoutMock();

    const res = await fetch(`${baseUrl}/api/${reqObj.url}`, reqObj.settings);
    if (!res.ok) {
        dispatch(setStatus('failed'));
        return false;
    }

    return res;
};

export function getItemsUrl(categoryId: number, offset?: number) {
    const params = [{ categoryId }, { offset }];

    const searchParams = new URLSearchParams();
    params.forEach((param) => {
        const [[key, value]] = Object.entries(param);

        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    }, '');

    let url = 'items';
    if (searchParams) url += `?${searchParams.toString()}`;

    return url;
}
