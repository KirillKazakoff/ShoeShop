import React from 'react';
import { Table } from 'react-bootstrap';

export default function ItemTable() {
    return (
        <Table bordered>
            <tbody>
                <tr>
                    <td>Артикул</td>
                    <td>1000046</td>
                </tr>
                <tr>
                    <td>Производитель</td>
                    <td>PAUL ANDREW</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>Чёрный</td>
                </tr>
                <tr>
                    <td>Материалы</td>
                    <td>Кожа</td>
                </tr>
                <tr>
                    <td>Сезон</td>
                    <td>Лето</td>
                </tr>
                <tr>
                    <td>Повод</td>
                    <td>Прогулка</td>
                </tr>
            </tbody>
        </Table>
    );
}
