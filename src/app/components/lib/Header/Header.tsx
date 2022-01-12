import React from 'react';
import {
    Col, Navbar, Row, NavbarBrand,
} from 'react-bootstrap';
import HeaderBanner from './HeaderBanner';

import HeaderControls from './HeaderControls';
import HeaderNav from './HeaderNav';

export default function Header() {
    return (
        <section className='mb-sm-5 mb-md-0'>
            <Row>
                <Col>
                    <Navbar expand='md' bg='light'>
                        <NavbarBrand href='/'>
                            <img
                                src='http://localhost:9000/img/header-logo.png'
                                alt='Bosa Noga'
                            />
                        </NavbarBrand>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <HeaderNav />
                            <HeaderControls />
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <HeaderBanner>К весне готовы!</HeaderBanner>
                </Col>
            </Row>
        </section>
    );
}
