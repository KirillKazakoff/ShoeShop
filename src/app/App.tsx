import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/defaultStyle.css';
import '../css/style.css';

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageRoute from './components/routes/PageRoute';
import Main from './components/page/Main';
import AboutRoute from './components/routes/AboutRoute';
import ContactsRoute from './components/routes/ContactsRoute';
import Catalog from './components/lib/Main/Catalog';
import ProductRoute from './components/routes/Product';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PageRoute />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/product' element={<ProductRoute />} />
                    <Route path='/about' element={<AboutRoute />} />
                    <Route path='/contacts' element={<ContactsRoute />} />
                </Route>
            </Routes>
        </Router>
    );
}
