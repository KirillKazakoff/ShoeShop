import React from 'react';
import { Table, TableProps } from 'react-bootstrap';
import { ContentTypeFull } from '../../../redux/dataTypes';

type ItemTableProps = { content: ContentTypeFull } & TableProps;

export default function ItemTable({ content, ...props }: ItemTableProps) {
    return (
        <Table bordered {...props}>
            <tbody>
                <tr>
                    <td>Артикул</td>
                    <td>{content.sku}</td>
                </tr>
                <tr>
                    <td>Производитель</td>
                    <td>{content.manufacturer}</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>{content.color}</td>
                </tr>
                <tr>
                    <td>Материалы</td>
                    <td>{content.material}</td>
                </tr>
                <tr>
                    <td>Сезон</td>
                    <td>{content.season}</td>
                </tr>
                <tr>
                    <td>Повод</td>
                    <td>{content.reason}</td>
                </tr>
            </tbody>
        </Table>
    );
}
