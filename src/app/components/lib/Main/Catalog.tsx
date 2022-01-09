import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import {
    selectCategory,
    selectItems,
    selectCategories,
} from '../../../redux/contentSlice';

import { CategoryType } from '../../../data/initContent';
import LoadButton from '../LoadButton';
import Categories from './Categories';
import CatalogItems from './CatalogItems';
import { selectCatalogStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';
import { getCatalog, getItems } from '../../../logic/thunkApi';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const dispatch = useAppDispatch();
    const activeCategory = useAppSelector(selectCategory);
    const status = useAppSelector(selectCatalogStatus);
    const items = useAppSelector(selectItems);
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCatalog(activeCategory.id));
            return;
        }
        dispatch(getItems(activeCategory.id));
    }, [activeCategory]);

    if (status !== 'loaded') return <Preloader status={status} />;
    return (
        <>
            <Categories activeCategory={activeCategory} categoriesData={categories} />
            <CatalogItems items={items} />
            <LoadButton className='mt-4'>Загрузить еще</LoadButton>
        </>
    );
}
