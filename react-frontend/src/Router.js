import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import GalleryPage from './pages/GalleryPage/GalleryPage';
import MusicGalleryPage from './pages/GalleryPage/MusicGalleryPage';
// import ArtScreenArt from './pages/GalleryPage/ArtScreenArt';
import BeatmapListingPage from './pages/BeatmapListingPage/BeatmapListingPage';
import BeatmapPage from './pages/BeatmapPage/BeatmapPage';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage';
import MyApp from './MyApp';

function Router() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="musicgallery" element={<MusicGalleryPage/>} />
                <Route path="beatmaplisting" element={<BeatmapListingPage />} />
                <Route path="beatmap" element={<BeatmapPage/>} />
                <Route path="comingsoon" element={<ComingSoonPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="myapp" element={<MyApp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Router;