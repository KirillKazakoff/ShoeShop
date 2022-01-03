import { Nav } from 'react-bootstrap';
import RouteLink from '../RouteLink';
import React from 'react';

type HeaderNavProps = {};

export default function HeaderNav({}: HeaderNavProps) {
    return (
        <Nav className="me-auto">
            <RouteLink to="/">Главная</RouteLink>
            <RouteLink to="/about">О магазине</RouteLink>
            <RouteLink to="/contacts">Контакты</RouteLink>
            <RouteLink to="/catalog">Каталог</RouteLink>
        </Nav>
    );
}
