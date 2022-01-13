/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import SectionTitle from '../lib/Common/SectionTitle';
import { selectCurrentProduct } from '../../redux/slices/productFormSlice';
import { getItem } from '../../thunk/thunkApi';
import { setProductFormStatus } from '../../redux/slices/statusSlice';
import ItemTable from '../lib/Common/ItemTable';
import ProductForm from '../lib/Product/ProductForm';

export default function ProductRoute() {
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(selectCurrentProduct);
    const params = useParams();

    useEffect(() => {
        if (!params.id) return;
        dispatch(getItem(params.id));

        return () => {
            dispatch(setProductFormStatus('idle'));
        };
    }, []);

    if (!currentProduct) return null;
    const { title, images, sizes } = currentProduct;

    return (
        <section className="catalog-item">
            <SectionTitle>{title}</SectionTitle>
            <Row>
                <Col className="col-5">
                    <img src={images[0]} className="img-fluid" alt={title} />
                </Col>
                <Col className="col-7">
                    <ItemTable content={currentProduct} />
                    <ProductForm sizes={sizes} />
                </Col>
            </Row>
        </section>
    );
}
