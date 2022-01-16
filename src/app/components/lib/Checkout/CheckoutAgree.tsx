import React from 'react';
import { Form } from 'react-bootstrap';

export default function CheckoutAgree() {
    return (
        <Form.Group>
            <Form.Check
                label='Согласен с правилами доставки' name='agreement'
                required
            />
        </Form.Group>
    );
}
