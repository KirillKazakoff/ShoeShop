import React from 'react';
import { Form, Row } from 'react-bootstrap';

import { TotalOrder } from '../../../redux/dataTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { selectOrders } from '../../../redux/slices/cartSlice';
import { selectCheckout } from '../../../redux/slices/checkoutSlice';
import useChange from '../../../redux/useChange';
import { postTotalOrder } from '../../../thunk/thunkApi';

import CheckoutSubmit from './CheckotSubmit';
import CheckoutAddress from './CheckoutAddress';
import CheckoutAgree from './CheckoutAgree';
import CheckoutPhone from './CheckoutPhone';

export default function Checkout() {
    const dispatch = useAppDispatch();
    const inputs = useAppSelector(selectCheckout);
    const { address, phone, agreement } = inputs;

    const owner = { phone, address };
    const items = useAppSelector(selectOrders).map((item) => ({
        id: item.id,
        price: item.price,
        count: item.amount,
    }));
    const total: TotalOrder = { owner, items };

    const onChange = useChange();
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(postTotalOrder(total));
    };

    return (
        <Form className='border rounded p-4 w-50 m-auto valid' onSubmit={onSubmit}>
            <Row className='gy-3 mb-3'>
                <CheckoutPhone onChange={onChange} phone={phone} />
                <CheckoutAddress onChange={onChange} address={address} />
                <CheckoutAgree onChange={onChange} agreement={agreement} />
            </Row>
            <CheckoutSubmit>Оформить</CheckoutSubmit>
        </Form>
    );
}
