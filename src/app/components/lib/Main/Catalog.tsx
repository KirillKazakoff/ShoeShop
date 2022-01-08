import React from 'react';
import SectionTitle from '../SectionTitle';
import { useAppSelector } from '../../../data/reduxHooks';
import { selectCategory } from '../../../redux/contentSlice';

import { CategoryType } from '../../../data/initContent';
import LoadButton from '../LoadButton';
import Categories from './Categories';
import CatalogItems from './CatalogItems';
import { selectCatalogStatus } from '../../../redux/statusSlice';
import Preloader from '../Preloader';

export type CategoryClick = (category: CategoryType) => () => void;

export default function Catalog() {
    const activeCategory = useAppSelector(selectCategory);
    const status = useAppSelector(selectCatalogStatus);

    if (status !== 'loaded') return <Preloader status={status} />;
    return (
        <section className='catalog mb-5'>
            <SectionTitle>Каталог</SectionTitle>
            <Categories activeCategory={activeCategory} />
            <CatalogItems activeCategory={activeCategory} />
            <LoadButton>Загрузить еще</LoadButton>
        </section>
    );
}
