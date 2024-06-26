import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import GalleryGrid from "../../GalleryGrid";

import styles from "./GalleryPage.module.css";

import headerBackground from '../../assets/images/headerBackground.png';
// import searchIcon from '../../assets/icons/searchIcon.svg';

// const BACKEND_URL = 'http://localhost:5001';
const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';


function GalleryPage() {
    const [galleryImages, setGalleryImages] = useState([]);

    async function fetchAll() {
        try {
            const route = BACKEND_URL + '/gallery';
            const response = await axios.get(route);
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
            {/* <div className={styles.gallerySearchContainer}>
                <div className= {styles.gallerySearchItem}>
                    <form action="" className={styles.gallerySearchItem}>
                        <input type="text" placeholder="search" />
                        <button type="submit"><img src={searchIcon} alt="" /></button>
                    </form>
                </div>
            </div> */}
            <div className={styles.galleryDisplayMode}>
                <div className={styles.galleryDisplayModeContainter}>
                    <ArtTypeButton text="screen art" artType="/gallery" />
                    <ArtTypeButton text="music covers" artType="/musicgallery" />
                </div>
                <hr className={styles.menuDivider}></hr>
                <GalleryGrid galleryData={galleryImages} currentPage="art"/>
            </div>
        </div>
    );
}

function ArtTypeButton(props) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleClick() {
        navigate(props.artType);
    }

    const isActive = location.pathname === props.artType;
    const buttonClass = isActive ? `${styles.musicCoverMenuTitleText} ${styles.active}` : styles.musicCoverMenuTitleText;

    return (
        <div className={styles.pageButtonAndLine}>
            <button type="button" className={buttonClass} onClick={handleClick}>
                {props.text}
                
            </button>
            {isActive ? <hr className={styles.titleHr}></hr> : null}
        </div>
    );
}

export default GalleryPage;