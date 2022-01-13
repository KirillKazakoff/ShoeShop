import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/defaultStyle.css';
import '../css/style.css';

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import PageRoute from './components/routes/PageRoute';
import MainRoute from './components/routes/MainRoute';
import AboutRoute from './components/routes/AboutRoute';
import ContactsRoute from './components/routes/ContactsRoute';
import CatalogRoute from './components/routes/CatalogRoute';
import ProductRoute from './components/routes/ProductRoute';
import CartRoute from './components/routes/CartRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PageRoute />}>
                    <Route path='/' element={<MainRoute />} />
                    <Route path='/catalog' element={<CatalogRoute />} />
                    <Route path='/product/:id' element={<ProductRoute />} />
                    <Route path='/about' element={<AboutRoute />} />
                    <Route path='/contacts' element={<ContactsRoute />} />
                    <Route path='/cart' element={<CartRoute />} />
                </Route>
            </Routes>
        </Router>
    );
}
