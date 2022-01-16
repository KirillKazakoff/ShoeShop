/* eslint-disable object-curly-newline */
import React from 'react';
import { Form } from 'react-bootstrap';
import { InputState } from '../../../redux/slices/checkoutSlice';
import { OnBlurField, OnChangeField } from '../../../redux/useChange';
import CheckoutFeedback from './CheckoutFeedback';
import CheckoutField from './CheckoutField';

type CheckoutPhoneProps = {
    onChange: OnChangeField;
    phone: InputState;
    onBlur: OnBlurField;
};

export default function CheckoutPhone(props: CheckoutPhoneProps) {
    const { onChange, onBlur, phone } = props;

    return (
        <Form.Group controlId='phone'>
            <Form.Label>Телефон</Form.Label>
            <CheckoutField
                inputState={phone}
                placeholder='Ваш телефон'
                name='phone'
                onChange={onChange}
                onBlur={onBlur}
                pattern='^(\+\d{1,3}[- ]?)?\d{10}$'
                required
            />
            <CheckoutFeedback error={phone.error} name='phone' />
        </Form.Group>
    );
}
