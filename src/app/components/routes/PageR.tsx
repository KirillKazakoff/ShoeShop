import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer';
import Header from '../page/Header';
import Main from '../page/Main';

export default function PageR() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
