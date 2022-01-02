import '../css/defaultStyle.css';
import '../css/style.css';

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainR from './components/routes/MainR';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainR />} />
            </Routes>
        </Router>
    );
}
