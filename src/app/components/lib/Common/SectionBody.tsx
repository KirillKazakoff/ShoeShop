import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ItemShort from './ItemShort';
import { ContentType } from '../../../data/initContent';

export type SectionBodyProps = { contentArray: ContentType[] };

export default function SectionBody({ contentArray }: SectionBodyProps) {
    const items = contentArray.map((item) => (
        <Col className='col-4' key={item.id}>
            <ItemShort content={item} />
        </Col>
    ));

    return <Row className='gy-4'>{items}</Row>;
}
