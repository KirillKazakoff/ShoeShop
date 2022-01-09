import React, { useEffect } from 'react';
import { CategoryType } from '../../../data/initContent';
import SectionBody from '../SectionBody';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getItems } from '../../../logic/thunkApi';
import { selectItems, selectOffset } from '../../../redux/contentSlice';
import { selectItemsStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

type CatalogItemsProps = { activeCategory: CategoryType };

export default function CatalogItems({ activeCategory }: CatalogItemsProps) {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectItemsStatus);
    const items = useAppSelector(selectItems);
    const offset = useAppSelector(selectOffset);

    useEffect(() => {
        dispatch(getItems(activeCategory.id, offset));
    }, [activeCategory, offset]);

    if (status !== 'loaded') {
        return (
            <div className='catalog-items'>
                <Preloader status={status} />
            </div>
        );
    }
    return <SectionBody contentArray={items} />;
}
