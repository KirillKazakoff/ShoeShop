import React from 'react';
import { Stack } from 'react-bootstrap';
import CartButton from './CartButton';
import Search from './Search';

export default function HeaderControls() {
    return (
        <Stack direction='horizontal'>
            <Search />
            <CartButton />
        </Stack>
    );
}
