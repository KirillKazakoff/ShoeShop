import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
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

    const onChange = useChange();
    const [validated, setValidated] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        const form = e.currentTarget;

        e.preventDefault();
        if (form.checkValidity() === false) {
            console.log('what');
        }

        dispatch(postTotalOrder());
        setValidated(true);
    };

    return (
        <Form
            noValidate
            validated={validated}
            className='border rounded p-4 w-50 m-auto'
            onSubmit={onSubmit}
        >
            <Row className='gy-3 mb-3'>
                <CheckoutPhone onChange={onChange} phone={phone} />
                <CheckoutAddress onChange={onChange} address={address} />
                <CheckoutAgree onChange={onChange} agreement={agreement} />
            </Row>
            <CheckoutSubmit>Оформить</CheckoutSubmit>
        </Form>
    );
}
