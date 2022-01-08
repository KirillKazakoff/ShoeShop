import React from 'react';
import { NavLink, Nav, NavLinkProps } from 'react-bootstrap';
import { CategoryType } from '../../../data/initContent';
import { setCategory } from '../../../redux/contentSlice';
import { useAppDispatch } from '../../../data/reduxHooks';

type CategoryProps = NavLinkProps & { category: CategoryType };
type CategoriesProps = { categoriesData: CategoryType[] };

const Category = ({ category, ...props }: CategoryProps) => {
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(setCategory(category));
    };

    return (
        <Nav.Item>
            <NavLink
                id={category.id.toString()} {...props}
                onClick={onClick}
            >
                {category.title}
            </NavLink>
        </Nav.Item>
    );
};

export default function Categories({ categoriesData }: CategoriesProps) {
    const categories = categoriesData.map((item, index) => (
        <Category
            active={index === 0} category={item}
            key={item.id}
        />
    ));

    return <Nav className='fs-4 mb-5 justify-content-center'>{categories}</Nav>;
}
