import React, { useEffect } from 'react';
import { CategoryType } from '../../../redux/dataTypes';
import SectionBody from '../Common/SectionBody';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { getItems } from '../../../thunk/thunkApi';
import { selectItems, selectOffset } from '../../../redux/slices/contentSlice';
import { selectItemsStatus } from '../../../redux/slices/statusSlice';
import Preloader from '../Common/Preloader';

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
            <div className="catalog-items">
                <Preloader status={status} />
            </div>
        );
    }
    return <SectionBody contentArray={items} />;
}
