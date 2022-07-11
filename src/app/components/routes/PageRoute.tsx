import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../lib/Footer/Footer';
import Header from '../lib/Header/Header';

export default function PageRoute() {
    const location = useLocation();
    console.log(location);

    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}
