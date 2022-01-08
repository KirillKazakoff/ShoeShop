import React, { useEffect } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import { selectItems, selectCategory } from '../../../redux/contentSlice';
import { getItems } from '../../../logic/thunkApi';
import { CategoryType } from '../../../data/initContent';
import LoadButton from '../LoadButton';
import Categories from './Categories';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const dispatch = useAppDispatch();

    const items = useAppSelector(selectItems);
    const activeCategory = useAppSelector(selectCategory);

    useEffect(() => {
        dispatch(getItems(activeCategory.id));
    }, [dispatch, activeCategory]);

    return (
        <div className='mb-5'>
            <Section className='catalog' contentArray={items}>
                <SectionTitle>Каталог</SectionTitle>
                <Categories activeCategory={activeCategory} />
            </Section>
            <LoadButton>Загрузить еще</LoadButton>
        </div>
    );
}
