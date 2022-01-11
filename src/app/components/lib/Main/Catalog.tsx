import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectCategory, selectCategories } from '../../../redux/slices/contentSlice';

import Categories from './Categories';
import CatalogItems from './CatalogItems';
import { selectCategoriesStatus } from '../../../redux/slices/statusSlice';
import Preloader from '../Common/Preloader';
import { getCategories } from '../../../thunk/thunkApi';
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
