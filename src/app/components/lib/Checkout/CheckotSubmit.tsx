import React from 'react';
import { Button } from 'react-bootstrap';
import { TotalOrder } from '../../../redux/dataTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { selectOrders } from '../../../redux/slices/cartSlice';
import { CheckoutState } from '../../../redux/slices/checkoutSlice';
import { postTotalOrder } from '../../../thunk/thunkApi';

type CheckotSubmitProps = { inputs: CheckoutState };

export default function CheckotSubmit({ inputs }: CheckotSubmitProps) {
    const dispatch = useAppDispatch();

    const { phone, address, agreement } = inputs;
    const owner = { phone, address };
    const items = useAppSelector(selectOrders).map((item) => ({
        id: item.id,
        price: item.price,
        count: item.amount,
    }));

    const total: TotalOrder = { owner, items };
    const onClick = () => dispatch(postTotalOrder(total));

    return <Button variant='outline-secondary'>Оформить</Button>;
}
