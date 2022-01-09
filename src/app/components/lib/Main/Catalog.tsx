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
import { selectCatalogStatus, selectCategoriesStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';
import { getItems, getCategories } from '../../../logic/thunkApi';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const dispatch = useAppDispatch();
    const activeCategory = useAppSelector(selectCategory);
    const status = useAppSelector(selectCategoriesStatus);
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    if (status !== 'loaded') return <Preloader status={status} />;
    return (
        <>
            <Categories activeCategory={activeCategory} categoriesData={categories} />
            <CatalogItems activeCategory={activeCategory} />
            <LoadButton className='mt-4'>Загрузить еще</LoadButton>
        </>
    );
}
