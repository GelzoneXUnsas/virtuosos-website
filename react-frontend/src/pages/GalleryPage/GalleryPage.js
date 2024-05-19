import React, {useState, useEffect} from "react";
import axios from "axios";
import GalleryGrid from "../../GalleryGrid";

import styles from "./GalleryPage.module.css";
import headerBackground from '../../assets/images/headerBackground.png';



function GalleryPage() {
    const [galleryImages, setGalleryImages] = useState([]);

    async function fetchAll() {
        try {
            const response = await axios.get('http://localhost:5001/gallery');
            console.log(response.data);
            return response.data.screenart_list;
        }
        catch (error) {
            //We're not handling errors. Just logging into the console.
            console.log(error);
            return false;

        }
    }

    useEffect(() => {
        fetchAll().then(result => {
            console.log('RESULT', result);
            if (result)
                setGalleryImages(result);
        });
    }, []);

    return (
        <div className={styles.gallerypage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>GALLERY</div>
            </div>
            <div className="searchBar">

            </div>
            <div className="menuContainer">
                <div className={styles.menuTitle}>
                    <div className={styles.screenArtMenuTitleText}>screen art</div>
                    <div className={styles.musicCoverMenuTitleText}>music covers</div>
                </div>
                <div className={styles.menuDivider}></div>
            </div>
            <div className={styles.imageParent}>
                <div className={styles.imageGrid}>
                    <GalleryGrid galleryData={galleryImages} />
                    {/* <img className={styles.artImage} src={art1} alt="" />
                    <img className={styles.artImage} src={art2} alt="" />
                    <img className={styles.artImage} src={art3} alt="" />
                    <img className={styles.artImage} src={art4} alt="" />
                    <img className={styles.artImage} src={art5} alt="" />
                    <img className={styles.artImage} src={art6} alt="" />
                    <img className={styles.artImage} src={art7} alt="" />
                    <img className={styles.artImage} src={art8} alt="" /> */}
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;