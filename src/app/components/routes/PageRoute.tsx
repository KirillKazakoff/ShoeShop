import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer';
import Header from '../page/Header';

export default function PageRoute() {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}
