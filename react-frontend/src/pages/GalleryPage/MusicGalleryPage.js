import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import GalleryGrid from "../../GalleryGrid";
// import searchIcon from '../../assets/icons/searchIcon.svg';

import styles from "./GalleryPage.module.css";
import headerBackground from '../../assets/images/headerBackground.png';

const BACKEND_URL = 'http://localhost:5001';
// const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';

function MusicGalleryPage() {
    const [galleryImages, setGalleryImages] = useState([]);

    async function fetchAll() {
        try {
            const route = BACKEND_URL + '/gallery';
            const response = await axios.get(route);
            console.log(response.data);
            return response.data.musiccovers_list;
        }
        catch (error) {
            //We're not handling errors. Just logging into the console.
            console.log(error);
            return false;

        }
    }

    useEffect(() => {
        fetchAll().then(result => {
            if (result)
                setGalleryImages(result);
                console.log('RESULT', result);
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
            <hr></hr>
            <div className={styles.imageGrid}>
                <GalleryGrid galleryData={galleryImages} />
            </div>
        </div>
    </div>
    );
}


function ArtTypeButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.artType);
    }


    return (
        <button type="button" className={styles.musicCoverMenuTitleText} onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default MusicGalleryPage;