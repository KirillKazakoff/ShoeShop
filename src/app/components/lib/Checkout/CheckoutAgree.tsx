import React from 'react';
import { Form } from 'react-bootstrap';
import { OnChangeField } from '../../../redux/useChange';

type CheckoutAgreeProps = { agreement: boolean; onChange: OnChangeField };

export default function CheckoutAgree({ agreement, onChange }: CheckoutAgreeProps) {
    return (
        <Form.Group>
            <Form.Check
                label='Согласен с правилами доставки'
                name='agreement'
                checked={agreement}
                onChange={onChange}
                required
            />
        </Form.Group>
    );
}
