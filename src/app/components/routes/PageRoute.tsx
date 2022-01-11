import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../lib/Footer/Footer';
import Header from '../lib/Header/Header';

export default function PageRoute() {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}
