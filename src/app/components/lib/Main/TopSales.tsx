import React, { useEffect } from 'react';
import SectionBody from '../Common/SectionBody';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { getTopSalesItems } from '../../../thunk/thunkApi';
import { selectTopSales } from '../../../redux/slices/contentSlice';
import { selectTopSalesItemsStatus } from '../../../redux/slices/statusSlice';
import Preloader from '../Common/Preloader';

export default function TopSales() {
    const dispatch = useAppDispatch();
    const topSalesItems = useAppSelector(selectTopSales);
    const status = useAppSelector(selectTopSalesItemsStatus);

    useEffect(() => {
        dispatch(getTopSalesItems());
    }, []);

    if (status !== 'loaded') return <Preloader status={status} />;
    return <SectionBody contentArray={topSalesItems} />;
}
