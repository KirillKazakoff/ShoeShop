import React from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { CategoryType } from '../../../redux/dataTypes';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setCategory, setOffset } from '../../../redux/slices/contentSlice';

type CategoriesProps = {
    categoriesData: CategoryType[];
    activeCategory: CategoryType;
};

type CategoryProps = { category: CategoryType; isActive: boolean };

function Category({ category, isActive }: CategoryProps) {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setCategory(category));
        dispatch(setOffset(0));
    };
    return (
        <Nav.Item>
            <NavLink
                id={category.id.toString()} onClick={onClick}
                active={isActive}
            >
                {category.title}
            </NavLink>
        </Nav.Item>
    );
}

export default function Categories({ categoriesData, activeCategory }: CategoriesProps) {
    const categories = categoriesData.map((item) => (
        <Category
            key={item.id}
            category={item}
            isActive={item.id === activeCategory.id}
        />
    ));

    return <Nav className='fs-4 mb-5 justify-content-center'>{categories}</Nav>;
}
