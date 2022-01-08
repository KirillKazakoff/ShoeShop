import React, { useEffect } from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { CategoryType } from '../../../data/initContent';
import { useAppSelector, useAppDispatch } from '../../../data/reduxHooks';
import { getItems, getCategories } from '../../../logic/thunkApi';
import { setCategory, selectCategories } from '../../../redux/contentSlice';

type CategoriesProps = {
    activeCategory: CategoryType;
};

type CategoryProps = { category: CategoryType; isActive: boolean };

function Category({ category, isActive }: CategoryProps) {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setCategory(category));
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

export default function Categories({ activeCategory }: CategoriesProps) {
    const categoriesData = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categories = categoriesData.map((item) => (
        <Category category={item} isActive={item.id === activeCategory.id} />
    ));

    return <Nav className='fs-4 mb-5 justify-content-center'>{categories}</Nav>;
}
