// import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./MusicianPage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import headerBackground from '../../assets/images/headerBackground.png';


import durationIcon from '../../assets/icons/durationicon.svg';
import bpmIcon from '../../assets/icons/bpmIcon.svg';
import noteCountIcon from '../../assets/icons/notecountIcon.svg';
import sliderCountIcon from '../../assets/icons/bm-slider-icon.svg';
import bm30ValueBar from '../../assets/icons/bm-fill-bar-30.svg';
import bmDifficultyBar from '../../assets/icons/bm-difficultyBar.svg';

import playIcon from '../../assets/icons/playIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';
import verifiedIcon from "../../assets/icons/verifiedIcon.svg";
import easyIcon from "../../assets/icons/bmEasyIcon.svg";

//images for musician covers 
import artist1Image from "../../assets/images/featuredArtists/artist1.jpg";


//images for artists


import tempMusician from "../../assets/beatmapFiles/beatmapMockFile.zip";



 const BACKEND_URL = 'http://localhost:5001';
//const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';


function MusicianPage() {
    const [musician, setMusician] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log('ID', id);
    async function fetchAll() {
        try {
            const route = BACKEND_URL + `/musicianListing?id=${id}`;
            const response = await axios.get(route);
            console.log("wop wop wop:",response.data.musician_info[0]);
            return response.data.musician_info;
        }
        catch (error) {
            console.log("there was a error",error);
            return false;
        }
    }

    useEffect(() => {
        fetchAll().then(result => {
            console.log('RESULT', result);
            if (result && result.length > 0)
                setMusician(result[0]);
                console.log('musician', musician);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.musicianPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>Musican</div>
                </div>
                <div className={styles.aboutsec}>
                    <img className={styles.profileimg} alt="Profile img" src={artist1Image} />



                    </div>
               
            </div>
    );
}

export default MusicianPage;




