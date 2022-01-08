import React, { useEffect } from 'react';
import { CategoryType } from '../../../data/initContent';
import SectionBody from '../SectionBody';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getItems } from '../../../logic/thunkApi';
import { selectItems } from '../../../redux/contentSlice';
import { selectItemsStatus, setCatalogStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

type CatalogItemsProps = { activeCategory: CategoryType };

export default function CatalogItems({ activeCategory }: CatalogItemsProps) {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const status = useAppSelector(selectItemsStatus);

    dispatch(setCatalogStatus(status));
    console.log(status);

    useEffect(() => {
        dispatch(getItems(activeCategory.id));
    }, [activeCategory, dispatch]);

    return <SectionBody contentArray={items} />;
}
