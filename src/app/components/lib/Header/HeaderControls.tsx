import React from 'react';
import { Form, Stack } from 'react-bootstrap';
import CartIcon from './CartIcon';
import ControlsIcon from './ControlsIcon';

export default function HeaderControls() {
    return (
        <Stack direction='horizontal' gap={3}>
            <ControlsIcon id='search-expander' cls='header-controls-search' />
            <CartIcon />
            <Form hidden className='header-controls-search-form'>
                <Form.Control placeholder='Поиск' />
            </Form>
        </Stack>
    );
}
