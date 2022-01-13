import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContentTypeCart } from '../../../redux/dataTypes';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { deleteOrder } from '../../../redux/slices/cartSlice';

type CartOrderProps = { order: ContentTypeCart; index: number };

export default function CartOrder({ order, index }: CartOrderProps) {
    const dispatch = useAppDispatch();
    const onClick = () => dispatch(deleteOrder(order.id));

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <NavLink to={`/product/${order.id}`}>{order.title}</NavLink>
            </td>
            <td>{order.size}</td>
            <td>{order.amount}</td>
            <td>{`${order.price} руб.`}</td>
            <td>{`${order.price * order.amount} руб.`}</td>
            <td>
                <Button
                    variant='outline-danger' size='sm'
                    onClick={onClick}
                >
                    Удалить
                </Button>
            </td>
        </tr>
    );
}
