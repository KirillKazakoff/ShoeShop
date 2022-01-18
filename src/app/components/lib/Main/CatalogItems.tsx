import React, { useEffect } from 'react';
import { CategoryType } from '../../../redux/dataTypes';
import SectionBody from '../Common/SectionBody';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { getItems } from '../../../thunk/thunkApi';
import { selectItems, selectOffset } from '../../../redux/slices/contentSlice';
import { selectItemsStatus } from '../../../redux/slices/statusSlice';
import Preloader from '../Common/Preloader';
import { selectFilter } from '../../../redux/slices/searchSlice';

type CatalogItemsProps = { activeCategory: CategoryType };

export default function CatalogItems({ activeCategory }: CatalogItemsProps) {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectItemsStatus);
    const items = useAppSelector(selectItems);
    const offset = useAppSelector(selectOffset);
    const q = useAppSelector(selectFilter);

    useEffect(() => {
        dispatch(getItems(activeCategory.id, offset, q));
    }, [activeCategory, offset, q]);

    // if (filter) items = items.filter((item) => item.title.includes(filter));

    if (status !== 'loaded') {
        return (
            <div className='catalog-items'>
                <Preloader status={status} />
            </div>
        );
    }
    return <SectionBody contentArray={items} />;
}
