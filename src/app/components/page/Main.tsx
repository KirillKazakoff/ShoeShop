/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../lib/SectionTitle';

import Catalog from '../lib/Main/Catalog';
import TopSales from '../lib/Main/TopSales';

export default function Main() {
    return (
        <Container as='main' className='pt-sm-4'>
            <Row className='gy-3'>
                <Col className='gy-5 col-12'>
                    <section>
                        <SectionTitle>Хиты продаж</SectionTitle>
                        <TopSales />
                    </section>
                </Col>
                <Col className='col-12'>
                    <section className='catalog mb-5'>
                        <SectionTitle>Каталог</SectionTitle>
                        <Catalog />
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
