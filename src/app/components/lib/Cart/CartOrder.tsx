import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContentTypeCart } from '../../../redux/dataTypes';

type CartOrderProps = { order: ContentTypeCart };

export default function CartOrder({ order }: CartOrderProps) {
    return (
        <tr>
            <td>{order.id}</td>
            <td>
                <NavLink to={`/product/${order.id}`}>{order.title}</NavLink>
            </td>
            <td>{order.size}</td>
            <td>{order.amount}</td>
            <td>{`${order.price} руб.`}</td>
            <td>{`${order.price * order.amount} руб.`}</td>
            <td>
                <Button variant='outline-danger' size='sm'>
                    Удалить
                </Button>
            </td>
        </tr>
    );
}
