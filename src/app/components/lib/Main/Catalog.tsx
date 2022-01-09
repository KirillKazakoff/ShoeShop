import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import { selectCategory, selectCategories, setOffset } from '../../../redux/contentSlice';

import { CategoryType } from '../../../data/initContent';
import LoadButton from '../LoadButton';
import Categories from './Categories';
import CatalogItems from './CatalogItems';
import { selectCategoriesStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';
import { getCategories } from '../../../logic/thunkApi';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const dispatch = useAppDispatch();
    const activeCategory = useAppSelector(selectCategory);
    const status = useAppSelector(selectCategoriesStatus);
    const categories = useAppSelector(selectCategories);

    const onLoadClick = () => dispatch(setOffset(6));

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    if (status !== 'loaded') return <Preloader status={status} />;
    return (
        <>
            <Categories activeCategory={activeCategory} categoriesData={categories} />
            <CatalogItems activeCategory={activeCategory} />
            <LoadButton onClick={onLoadClick} className='mt-4'>
                Загрузить еще
            </LoadButton>
        </>
    );
}
