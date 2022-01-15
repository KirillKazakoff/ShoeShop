import React from 'react';
import { Form } from 'react-bootstrap';
import { OnChangeField } from '../../../redux/useChange';

type CheckoutPhoneProps = { onChange: OnChangeField; phone: string };

export default function CheckoutPhone({ onChange, phone }: CheckoutPhoneProps) {
    return (
        <Form.Group controlId='phone'>
            <Form.Label>Телефон</Form.Label>
            <Form.Control
                placeholder='Ваш телефон'
                name='phone'
                value={phone}
                onChange={onChange}
                pattern='^(\+\d{1,3}[- ]?)?\d{10}$'
                required
            />
        </Form.Group>
    );
}
