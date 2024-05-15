import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import GalleryPage from './pages/GalleryPage/GalleryPage';
// import ArtScreenArt from './pages/GalleryPage/ArtScreenArt';
import BeatmapListingPage from './pages/BeatmapPage/BeatmapListingPage';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage';

function Router() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="beatmaplisting" element={<BeatmapListingPage />} />
                <Route path="comingsoon" element={<ComingSoonPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Router;