import React from 'react';
import { Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Size } from '../../../redux/dataTypes';
import Amount from './Amount';
import Sizes from './Sizes';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectActiveSizeIndex } from '../../../redux/slices/productFormSlice';
import BigRedBtn from '../Common/BigRedBtn';

type ProductFormProps = { sizes: Size[] };
export default function ProductForm({ sizes }: ProductFormProps) {
    const dispatch;
    const activeSizeIndex = useAppSelector(selectActiveSizeIndex);
    const isActive = typeof activeSizeIndex !== 'number';

    return (
        <>
            <Stack gap={2} className='align-items-center'>
                <Sizes data={sizes} activeIndex={activeSizeIndex} />
                <Amount />
            </Stack>

            <NavLink to='/cart'>
                <BigRedBtn disabled={isActive}>В корзину</BigRedBtn>
            </NavLink>
        </>
    );
}
