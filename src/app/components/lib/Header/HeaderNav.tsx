import { Nav } from 'react-bootstrap';
import React from 'react';
import RouteLink from '../Common/RouteLink';

export default function HeaderNav() {
    return (
        <Nav className='me-auto'>
            <RouteLink to='/'>Главная</RouteLink>
            <RouteLink to='/about'>О магазине</RouteLink>
            <RouteLink to='/contacts'>Контакты</RouteLink>
            <RouteLink to='/catalog'>Каталог</RouteLink>
        </Nav>
    );
}
