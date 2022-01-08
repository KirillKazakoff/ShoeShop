import React, { useEffect } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import {
    selectItems,
    selectCategories,
    selectCategory,
    setCategory,
} from '../../../redux/contentSlice';
import { getItems, getCategories } from '../../../logic/thunkApi';
import { CategoryType } from '../../../data/initContent';
import LoadButton from '../LoadButton';
import Categories from './Categories';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const dispatch = useAppDispatch();

    const items = useAppSelector(selectItems);
    const activeCategory = useAppSelector(selectCategory);
    const categories = useAppSelector(selectCategories);

    const onCategoryClick: CategoryClick = (category) => () => {
        dispatch(setCategory(category));
    };

    useEffect(() => {
        dispatch(getItems(activeCategory.id));
        dispatch(getCategories());
    }, [dispatch, activeCategory]);

    return (
        <div className='mb-5'>
            <Section className='catalog' contentArray={items}>
                <SectionTitle>Каталог</SectionTitle>
                <Categories
                    onClick={onCategoryClick}
                    categoriesData={categories}
                    activeCategory={activeCategory}
                />
            </Section>
            <LoadButton>Загрузить еще</LoadButton>
        </div>
    );
}
