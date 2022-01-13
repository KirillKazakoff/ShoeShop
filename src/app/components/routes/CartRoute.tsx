/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import CartTable from '../lib/Cart/CartTable';
import CartForm from '../lib/Cart/CartForm';

export default function CartRoute() {
    return (
        <div>
            <section className='cart'>
                <h2 className='text-center'>Корзина</h2>
                {/* <CartTable /> */}
            </section>
            <section className='order'>
                <h2 className='text-center'>Оформить заказ</h2>
                <CartForm />
            </section>
        </div>
    );
}
