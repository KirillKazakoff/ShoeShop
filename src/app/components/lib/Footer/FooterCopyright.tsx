import React from 'react';

type FooterCopyrightProps = {};

export default function FooterCopyright({}: FooterCopyrightProps) {
    return (
        <section>
            <div className="footer-copyright">
                2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все
                права защищены.
                <br />
                Доставка по всей России!
            </div>
        </section>
    );
}
