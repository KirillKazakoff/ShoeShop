import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer';
import Header from '../page/Header';

export default function PageRoute() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
