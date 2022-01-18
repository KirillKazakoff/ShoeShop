/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import SectionTitle from '../lib/Common/SectionTitle';
import { selectCurrentProduct } from '../../redux/slices/productFormSlice';
import { getItem } from '../../thunk/thunkApi';
import {
    setProductFormStatus,
    selectProductFormStatus,
} from '../../redux/slices/statusSlice';
import ItemTable from '../lib/Common/ItemTable';
import ProductForm from '../lib/Product/ProductForm';
import Preloader from '../lib/Common/Preloader';

export default function ProductRoute() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(selectCurrentProduct);
    const status = useAppSelector(selectProductFormStatus);

    useEffect(() => {
        if (!params.id) return;
        dispatch(getItem(params.id));

        return () => {
            dispatch(setProductFormStatus('idle'));
        };
    }, []);

    if (status !== 'loaded') return <Preloader status={status} />;
    if (!currentProduct) return null;

    const { title, images } = currentProduct;

    return (
        <section className='selected-item'>
            <SectionTitle>{title}</SectionTitle>
            <Row>
                <Col className='col-5'>
                    <img
                        src={images[0]} className='img-fluid'
                        alt={title}
                    />
                </Col>
                <Col className='col-7'>
                    <ItemTable content={currentProduct} />
                    <ProductForm product={currentProduct} />
                </Col>
            </Row>
        </section>
    );
}
