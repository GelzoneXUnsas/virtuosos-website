import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import GalleryPage from './pages/GalleryPage/GalleryPage';
import ArtScreenArt from './pages/GalleryPage/ArtScreenArt';

function Router() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="gallery" element={<ArtScreenArt />} />
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Router;