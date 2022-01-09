import React, { useEffect } from 'react';
import { CategoryType, ContentType } from '../../../data/initContent';
import SectionBody from '../SectionBody';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getItems } from '../../../logic/thunkApi';
import { selectItems } from '../../../redux/contentSlice';
import { selectItemsStatus, setCatalogStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

type CatalogItemsProps = { activeCategory: CategoryType };

export default function CatalogItems({ activeCategory }: CatalogItemsProps) {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectItemsStatus);
    const items = useAppSelector(selectItems);

    useEffect(() => {
        dispatch(getItems(activeCategory.id));
    }, [activeCategory]);

    if (status !== 'loaded') return <Preloader status={status} />;
    return <SectionBody contentArray={items} />;
}
