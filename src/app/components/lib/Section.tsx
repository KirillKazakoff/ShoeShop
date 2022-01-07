import React, { HTMLProps } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContentType } from '../../data/initContent';
import Item from './Item';

export type SectionProps = { contentArray: ContentType[] } & HTMLProps<HTMLDivElement>;

export default function Section({ contentArray, children, className }: SectionProps) {
    const items = contentArray.map((item) => (
        <Col className='col-4' key={item.id}>
            <Item content={item} />
        </Col>
    ));

    return (
        <section className={className}>
            {children}
            <Row className='gy-4'>{items}</Row>
        </section>
    );
}
