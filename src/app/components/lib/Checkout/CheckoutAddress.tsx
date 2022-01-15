import React from 'react';
import { Form } from 'react-bootstrap';
import { OnChangeField } from '../../../redux/useChange';

type CheckoutAddressProps = { onChange: OnChangeField; address: string };

export default function CheckoutAddress({ onChange, address }: CheckoutAddressProps) {
    return (
        <Form.Group controlId='address'>
            <Form.Label>Адрес доставки</Form.Label>
            <Form.Control
                placeholder='Адрес'
                name='address'
                value={address}
                onChange={onChange}
                required
            />
        </Form.Group>
    );
}
