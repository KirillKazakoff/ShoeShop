import React from 'react';
import { Col, Container, Navbar, Row, NavbarBrand, Nav } from 'react-bootstrap';
import Controls from '../lib/Controls/Controls';

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
                                <Nav.Link active href="/catalog.html">
                                    Главная
                                </Nav.Link>
                                <Nav.Link href="/about.html">
                                    О магазине
                                </Nav.Link>
                                <Nav.Link href="/contacts.html">
                                    Контакты
                                </Nav.Link>
                            </Nav>

                            <Controls />
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}
