import React from 'react';
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ControlsIcon from './ControlsIcon';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectOrders } from '../../../redux/slices/cartSlice';

export default function CartIcon() {
    const orders = useAppSelector(selectOrders);

    return (
        <NavLink to='/cart'>
            <ControlsIcon className='header-controls-cart'>
                {orders.length === 0 ? null : (
                    <Badge className='header-controls-cart-full'>{orders.length}</Badge>
                )}
            </ControlsIcon>
        </NavLink>
    );
}
