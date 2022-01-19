/* eslint-disable object-curly-newline */
import React from 'react';
import { Form } from 'react-bootstrap';

import { OnBlurField, OnChangeField } from './useChange';
import { InputState } from '../../../redux/slices/checkoutSlice';
import CheckoutField from './CheckoutField';
import CheckoutFeedback from './CheckoutFeedback';

type CheckoutAddressProps = {
    onChange: OnChangeField;
    onBlur: OnBlurField;
    address: InputState;
};

export default function CheckoutAddress(props: CheckoutAddressProps) {
    const { onChange, onBlur, address } = props;

    return (
        <Form.Group controlId='address'>
            <Form.Label>Адрес доставки</Form.Label>
            <CheckoutField
                inputState={address}
                placeholder='Ваш адрес'
                name='address'
                onChange={onChange}
                onBlur={onBlur}
                required
            />

            <CheckoutFeedback error={address.error} name='address' />
        </Form.Group>
    );
}
