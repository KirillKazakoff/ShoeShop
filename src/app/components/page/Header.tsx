import React from 'react';
import { Col, Container, Navbar, Row, NavbarBrand, Nav } from 'react-bootstrap';

import HeaderControls from '../lib/Header/HeaderControls';
import HeaderNav from '../lib/Header/HeaderNav';

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
                            <HeaderNav />
                            <HeaderControls />
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}
