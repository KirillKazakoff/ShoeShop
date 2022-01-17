/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import CartTable from '../lib/Cart/CartTable';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectOrders } from '../../redux/slices/cartSlice';
import Checkout from '../lib/Checkout/Checkout';

export default function CartRoute() {
    const orders = useAppSelector(selectOrders);

    if (orders.length === 0) {
        return <h2 className='text-center h2'>Ваша корзина пуста</h2>;
    }
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
