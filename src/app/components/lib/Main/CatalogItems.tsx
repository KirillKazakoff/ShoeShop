import React, { useEffect } from 'react';
import { CategoryType, ContentType } from '../../../data/initContent';
import SectionBody from '../SectionBody';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getItems } from '../../../logic/thunkApi';
import { selectItems } from '../../../redux/contentSlice';
import { selectItemsStatus, setCatalogStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

type CatalogItemsProps = { items: ContentType[] };

export default function CatalogItems({ items }: CatalogItemsProps) {
    const status = useAppSelector(selectItemsStatus);

    if (status !== 'loaded') return <Preloader status={status} />;
    return <SectionBody contentArray={items} />;
}
