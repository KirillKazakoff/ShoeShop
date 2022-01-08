import React, { useEffect } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Categories from './Categories';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import {
    selectItems,
    selectCategories,
    selectCategory,
} from '../../../redux/contentSlice';
import { getItems, getCategories } from '../../../logic/thunkApi';

export default function Catalog() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const activeCategory = useAppSelector(selectCategory);
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        dispatch(getItems(activeCategory.id));
        dispatch(getCategories());
    }, [dispatch, activeCategory]);

    return (
        <Section className='catalog col-12' contentArray={items}>
            <SectionTitle>Каталог</SectionTitle>
            <Categories categoriesData={categories} />
        </Section>
    );
}
