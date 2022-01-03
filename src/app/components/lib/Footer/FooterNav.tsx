import { Col, Nav } from 'react-bootstrap';
import RouteLink from '../RouteLink';
import React from 'react';

type FooterNavProps = {};

export default function FooterNav({}: FooterNavProps) {
    return (
        <section>
            <h5>Информация</h5>
            <Nav className="flex-column">
                <RouteLink to="/about">О магазине</RouteLink>
                <RouteLink to="/contacts">Контакты</RouteLink>
                <RouteLink to="/catalog">Каталог</RouteLink>
            </Nav>
        </section>
    );
}
