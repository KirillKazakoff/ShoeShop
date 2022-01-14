import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectCheckout } from '../../../redux/slices/checkoutSlice';
import useChange from '../../../redux/useChange';
import CheckotSubmit from './CheckotSubmit';

export default function Checkout() {
    const inputs = useAppSelector(selectCheckout);
    const onChange = useChange();

    return (
        <Form className='border rounded p-4 w-50 m-auto'>
            <Row className='gy-3 mb-3'>
                <Form.Group controlId='phone'>
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                        placeholder='Ваш телефон'
                        name='phone'
                        value={inputs.phone}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Адрес доставки</Form.Label>
                    <Form.Control
                        placeholder='Адрес'
                        name='address'
                        value={inputs.address}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        type='checkbox'
                        label='Согласен с правилами доставки'
                        name='agreement'
                        checked={inputs.agreement}
                        onChange={onChange}
                    />
                </Form.Group>
            </Row>

            <CheckotSubmit inputs={inputs} />
        </Form>
    );
}
