import FooterLink from './FooterLink';
import { Stack } from 'react-bootstrap';
import React from 'react';

type FooterContactsProps = {};

export default function FooterContacts({}: FooterContactsProps) {
    return (
        <section className="footer-contacts">
            <h5>Контакты:</h5>
            <FooterLink href="tel:+7-495-790-35-03" cls="phone">
                +7 495 79 03 5 03
            </FooterLink>

            <span className="footer-contacts-working-hours">
                Ежедневно: с 09-00 до 21-00
            </span>

            <FooterLink href="mailto:office@bosanoga.ru" cls="email">
                office@bosanoga.ru
            </FooterLink>

            <Stack direction="horizontal" className="mt-3 justify-content-end bg-light">
                <div className="footer-social-link footer-social-link-twitter" />
                <div className="footer-social-link footer-social-link-vk" />
            </Stack>
        </section>
    );
}
