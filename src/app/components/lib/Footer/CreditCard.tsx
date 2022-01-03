import React from 'react';

type CreditCardProps = { cls: string };

export default function CreditCard({ cls }: CreditCardProps) {
    return <div className={`footer-pay-systems footer-pay-systems-${cls}`}></div>;
}
