import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Catalog from '../lib/Main/Catalog';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectSearch } from '../../redux/slices/searchSlice';
import useSearchChange from '../lib/Header/useSearchChange';
import { OnSubmitForm } from '../lib/Checkout/useChange';
import useFilter from '../lib/Header/useSearchSubmit';

export default function CatalogRoute() {
    const { value } = useAppSelector(selectSearch);
    const onChange = useSearchChange();
    const filterItems = useFilter();

    const onSubmit: OnSubmitForm = (e) => {
        e.preventDefault();
        filterItems();
    };

    return (
        <Col className='my-5'>
            <h2 className='h2 text-center'>Каталог</h2>
            <Form className='catalog-search-form' onSubmit={onSubmit}>
                <Form.Control
                    placeholder='Поиск' onChange={onChange}
                    value={value}
                />
            </Form>
            <Catalog />
        </Col>
    );
}
