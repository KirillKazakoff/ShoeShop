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

const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    await timeoutMock();

    const res = await fetch(`${baseUrl}/api/${reqObj.url}`, reqObj.settings);
    if (!res.ok) {
        dispatch(setStatus('failed'));
        return false;
    }

    return res;
};

export default request;
