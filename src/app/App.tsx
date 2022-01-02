import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/defaultStyle.css';
import '../css/style.css';

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageR from './components/routes/PageR';
import Main from './components/page/Main';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageR />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/catalog" element={<div>ABOUT!!!</div>} />
                    <Route path="/about" element={<div>ABOUT!!!</div>} />
                    <Route path="/contacts" element={<div>Contacts!!!</div>} />
                </Route>
            </Routes>
        </Router>
    );
}
