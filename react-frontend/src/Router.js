import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';

function Router() {
    return (
        <div>
            <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    );
}

export default Router;