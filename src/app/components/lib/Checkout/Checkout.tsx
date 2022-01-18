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

    const { address, phone } = inputs;

    const [onChange, onBlur] = useChange();
    const [validated, setValidated] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        const form = e.currentTarget as HTMLFormElement;

        e.preventDefault();

        if (form.checkValidity() === false) {
            setValidated(true);
            console.log('hahaa');
            return;
        }
        console.log('bruh');

        dispatch(postTotalOrder());
    };

    return (
        <Form
            noValidate
            validated={validated}
            className='border rounded p-4 w-50 m-auto'
            onSubmit={onSubmit}
        >
            <Row className='gy-3 mb-3'>
                <CheckoutPhone
                    onChange={onChange} phone={phone}
                    onBlur={onBlur}
                />
                <CheckoutAddress
                    onChange={onChange} address={address}
                    onBlur={onBlur}
                />
                <CheckoutAgree />
            </Row>
            <CheckoutSubmit>Оформить</CheckoutSubmit>
        </Form>
    );
}
