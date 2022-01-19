import React from 'react';
import { Stack } from 'react-bootstrap';
import CartIcon from './CartIcon';
import Search from './Search';
import SearchIcon from './SearchIcon';

export default function HeaderControls() {
    return (
        <Stack direction='horizontal'>
            <Search />
            <CartIcon />
        </Stack>
    );
}
