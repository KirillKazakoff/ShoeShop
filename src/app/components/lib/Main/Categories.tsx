import React from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { CategoryType } from '../../../data/initContent';
import type { CategoryClick } from './Catalog';

type CategoriesProps = {
    categoriesData: CategoryType[];
    onClick: CategoryClick;
    activeCategory: CategoryType;
};

type Category = { category: CategoryType };

function Category({ category }: Category);

export default function Categories(props: CategoriesProps) {
    const { categoriesData, onClick, activeCategory } = props;

    const categories = categoriesData.map((item) => (
        <Nav.Item>
            <NavLink
                id={item.id.toString()}
                onClick={onClick(item)}
                active={item.id === activeCategory.id}
            >
                {item.title}
            </NavLink>
        </Nav.Item>
    ));

    return <Nav className='fs-4 mb-5 justify-content-center'>{categories}</Nav>;
}
