import React, { HTMLProps } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContentType } from '../../data/initContent';
import Item from './Item';
import SectionHeader from './SectionHeader';

export type SectionProps = { contentArray: ContentType[] } & HTMLProps<HTMLDivElement>;

export default function Section({ contentArray, children, className }: SectionProps) {
    const items = contentArray.map((item) => (
        <Col className='col-4' key={item.id}>
            <Item content={item} />
        </Col>
    ));

    return (
        <section className={className}>
            <SectionHeader>{children}</SectionHeader>
            <Row className='gy-4'>{items}</Row>
        </section>
    );
}
