import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import { selectCategory, selectCategories } from '../../../redux/contentSlice';

import Categories from './Categories';
import CatalogItems from './CatalogItems';
import { selectCategoriesStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';
import { getCategories } from '../../../logic/thunkApi';
import CatalogLoadBtn from './CatalogLoadBtn';

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
            <CatalogLoadBtn />
        </>
    );
}
