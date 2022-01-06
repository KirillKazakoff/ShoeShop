/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../data/reduxHooks';
import { selectTopSales, selectItems } from '../../redux/contentSlice';
import { getItems, getTopSalesItems } from '../../logic/thunkApi';
import Section from '../lib/Main/Section';

export default function Main() {
    const topSalesItems = useAppSelector(selectTopSales);
    const items = useAppSelector(selectItems);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopSalesItems());
        dispatch(getItems());
    }, []);

    return (
        <Container as='main' className='pt-sm-4'>
            <Row className='gy-3'>
                <Col className='gy-5 col-12'>
                    <Section className='top-sales' contentArray={topSalesItems}>
                        Хиты продаж
                    </Section>
                </Col>
                <Col>
                    <Section className='catalog col-12' contentArray={items}>
                        Каталог
                    </Section>
                </Col>
            </Row>
        </Container>
    );
}
