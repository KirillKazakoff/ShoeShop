import CreditCard from './CreditCard';
import React from 'react';

type FooterCardsProps = {};

export default function FooterCards({}: FooterCardsProps) {
    return (
        <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
                <CreditCard cls="paypal" />
                <CreditCard cls="master-card" />
                <CreditCard cls="visa" />
                <CreditCard cls="yandex" />
                <CreditCard cls="webmoney" />
                <CreditCard cls="qiwi" />
            </div>
        </section>
    );
}
