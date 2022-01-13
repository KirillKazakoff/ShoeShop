/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export default function CartForm() {
    return (
        <Form className='border rounded p-4 w-50 m-auto'>
            <Row className='gy-3 mb-3'>
                <Form.Group controlId='phone'>
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control placeholder='Ваш телефон' />
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Адрес доставки</Form.Label>
                    <Form.Control placeholder='Адрес' />
                </Form.Group>

                <Form.Group>
                    <Form.Check type='checkbox' label='Согласен с правилами доставки' />
                </Form.Group>
            </Row>

            <Button variant='outline-secondary'>Оформить</Button>
        </Form>
    );
}
