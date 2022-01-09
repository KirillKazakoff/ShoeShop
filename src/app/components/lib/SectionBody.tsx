import React from 'react';
import { Col, Row, RowProps } from 'react-bootstrap';
import { ContentType } from '../../data/initContent';
import Item from './Item';

export type SectionBodyProps = { contentArray: ContentType[] };

export default function SectionBody({ contentArray }: SectionBodyProps) {
    const items = contentArray.map((item) => (
        <Col className='col-4' key={item.id}>
            <Item content={item} />
        </Col>
    ));

    return <Row className='gy-4'>{items}</Row>;
}
