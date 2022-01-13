import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { decrease, increase, selectAmount } from '../../../redux/slices/productFormSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';

export default function Amount() {
    const dispatch = useAppDispatch();
    const amount = useAppSelector(selectAmount);
    const onDecrease = () => dispatch(decrease());
    const onIncrease = () => dispatch(increase());

    return (
        <div>
            <span className='me-2'>Количество:</span>
            <ButtonGroup size='sm' className='pl-2'>
                <Button
                    variant='secondary' onClick={onDecrease}
                    disabled={amount === 1}
                >
                    -
                </Button>
                <Button
                    variant='outline-secondary' className='text-dark'
                    disabled
                >
                    {amount}
                </Button>
                <Button variant='secondary' onClick={onIncrease}>
                    +
                </Button>
            </ButtonGroup>
        </div>
    );
}
