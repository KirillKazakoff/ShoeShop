import React from 'react';
import { Stack } from 'react-bootstrap';
import { Size } from '../../../redux/dataTypes';
import AddButton from './AddButton';
import Amount from './Amount';
import Sizes from './Sizes';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectActiveSizeIndex } from '../../../redux/slices/cartSlice';

type ProductFormProps = { sizes: Size[] };
export default function ProductForm({ sizes }: ProductFormProps) {
    const activeSizeIndex = useAppSelector(selectActiveSizeIndex);
    const isActive = typeof activeSizeIndex !== 'number';

    return (
        <>
            <Stack gap={2} className='align-items-center'>
                <Sizes data={sizes} activeIndex={activeSizeIndex} />
                <Amount />
            </Stack>
            <AddButton disabled={isActive}>В корзину</AddButton>
        </>
    );
}
