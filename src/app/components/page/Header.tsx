import React from 'react';
import {
    Col,
    Container,
    Navbar,
    Row,
    NavbarBrand,
    Nav,
    NavLink as BootLink,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Controls from '../lib/Controls/Controls';
import RouteLink from '../lib/RouteLink';

export default function HeaderR() {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar expand="sm" bg="light">
                        <NavbarBrand href="/">
                            <img src="./img/header-logo.png" alt="Bosa Noga" />
                        </NavbarBrand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <RouteLink to="/">Главная</RouteLink>
                                <RouteLink to="/about">О магазине</RouteLink>
                                <RouteLink to="/contacts">Контакты</RouteLink>
                                <RouteLink to="/catalog">Каталог</RouteLink>
                            </Nav>

                            <Controls />
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}
