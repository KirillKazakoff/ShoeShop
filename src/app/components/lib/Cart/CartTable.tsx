import React from 'react';
import { Table } from 'react-bootstrap';
import { ContentTypeCart } from '../../../redux/dataTypes';
import CartOrder from './CartOrder';

type CartTableProps = { content: ContentTypeCart[] };

export default function CartTable({ content }: CartTableProps) {
    let total = 0;
    const orders = content.map((order) => {
        total += order.price * order.amount;
        return <CartOrder order={order} />;
    });
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Размер</th>
                    <th>Кол-во</th>
                    <th>Стоимость</th>
                    <th>Итого</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {orders}
                <tr>
                    <td colSpan={5} className='text-right'>
                        Общая стоимость
                    </td>
                    <td>{`${total} руб.`}</td>
                </tr>
            </tbody>
        </Table>
    );
}
