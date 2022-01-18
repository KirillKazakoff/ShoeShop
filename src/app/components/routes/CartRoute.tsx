/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTable from '../lib/Cart/CartTable';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { refreshOrders, selectOrders } from '../../redux/slices/cartSlice';
import Checkout from '../lib/Checkout/Checkout';
import {
    selectTotalOrderStatus,
    setTotalOrderStatus,
} from '../../redux/slices/statusSlice';
import Preloader from '../lib/Common/Preloader';
import { refreshCheckout } from '../../redux/slices/checkoutSlice';

export default function CartRoute() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const orders = useAppSelector(selectOrders);
    const orderStatus = useAppSelector(selectTotalOrderStatus);

    useEffect(() => {
        if (orderStatus === 'loaded') {
            dispatch(refreshCheckout());
            dispatch(refreshOrders());
            navigate('/');
        }
    }, [orderStatus]);

    useEffect(() => {
        return () => {
            dispatch(setTotalOrderStatus('idle'));
        };
    }, []);

    if (orders.length === 0) {
        return <h2 className='text-center h2'>Ваша корзина пуста</h2>;
    }

    if (orderStatus === 'loading') return <Preloader status={orderStatus} />;
    if (orderStatus === 'loaded') return null;

    return (
        <div>
            <section className='cart'>
                <h2 className='text-center h2'>Корзина</h2>
                <CartTable content={orders} />
            </section>
            <section className='order'>
                <h2 className='text-center h2'>Оформить заказ</h2>
                <Checkout />
            </section>
        </div>
    );
}
