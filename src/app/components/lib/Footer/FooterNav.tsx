import { Col, Nav } from 'react-bootstrap';
import React from 'react';
import RouteLink from '../Common/RouteLink';

export default function FooterNav() {
    return (
        <section>
            <h5>Информация</h5>
            <Nav className='flex-column'>
                <RouteLink to='/about'>О магазине</RouteLink>
                <RouteLink to='/contacts'>Контакты</RouteLink>
                <RouteLink to='/catalog'>Каталог</RouteLink>
            </Nav>
        </section>
    );
}
