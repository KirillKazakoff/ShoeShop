import React, { useEffect } from 'react';
import SectionBody from '../SectionBody';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getTopSalesItems } from '../../../logic/thunkApi';
import { selectTopSales } from '../../../redux/contentSlice';
import { selectTopSalesItemsStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

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
