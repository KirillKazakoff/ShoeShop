/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../data/reduxHooks';
import { selectTopSales, selectItems, selectCategories } from '../../redux/contentSlice';
import { getItems, getTopSalesItems, getCategories } from '../../logic/thunkApi';
import Section from '../lib/Section';
import SectionTitle from '../lib/SectionTitle';
import Categories from '../lib/Main/Categories';

export default function Main() {
    const topSalesItems = useAppSelector(selectTopSales);
    const items = useAppSelector(selectItems);
    const categories = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();

    console.log(categories);

    useEffect(() => {
        dispatch(getTopSalesItems());
        dispatch(getItems());
        dispatch(getCategories());
    }, []);

    if (categories.length === 0) return <div>Loading...</div>;
    return (
        <Container as='main' className='pt-sm-4'>
            <Row className='gy-3'>
                <Col className='gy-5 col-12'>
                    <Section className='top-sales' contentArray={topSalesItems}>
                        <SectionTitle>Хиты продаж</SectionTitle>
                    </Section>
                </Col>
                <Col>
                    <Section className='catalog col-12' contentArray={items}>
                        <SectionTitle>Каталог</SectionTitle>
                        <Categories categoriesData={categories} />
                    </Section>
                </Col>
            </Row>
        </Container>
    );
}
