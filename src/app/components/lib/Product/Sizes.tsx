/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Size as SizeType } from '../../../redux/dataTypes';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setActiveSize } from '../../../redux/slices/productFormSlice';

type SizesProps = { data: SizeType[]; activeSize: string };

export default function Sizes({ data, activeSize }: SizesProps) {
    const dispatch = useAppDispatch();
    const onClick = (e: React.SyntheticEvent) => {
        dispatch(setActiveSize(e.currentTarget.textContent as string));
    };

    const sizes = data.map(({ size, avalible }, index) => {
        if (!avalible) return null;
        return (
            <Button
                key={index}
                id={index.toString()}
                variant='outline-secondary'
                onClick={onClick}
                active={size === activeSize}
            >
                {size}
            </Button>
        );
    });

    return (
        <div>
            <span className='me-2'>Размеры:</span>
            <ButtonGroup size='sm' className='fs-5'>
                {sizes}
            </ButtonGroup>
        </div>
    );
}
