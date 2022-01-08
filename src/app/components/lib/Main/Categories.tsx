import React from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { CategoryType } from '../../../data/initContent';
import { setCategory, selectCategory } from '../../../redux/contentSlice';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';

type CategoriesProps = { categoriesData: CategoryType[] };

export default function Categories({ categoriesData }: CategoriesProps) {
    const dispatch = useAppDispatch();
    const activeCategory = useAppSelector(selectCategory);

    const onClick = (category: CategoryType) => () => {
        dispatch(setCategory(category));
    };

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
