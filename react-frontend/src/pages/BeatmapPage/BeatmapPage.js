import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapPage.module.css";

import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
// import searchIcon from '../../assets/icons/searchIcon.svg';

import cover1 from '../../assets/images/musicCovers/celticwhispersballad.png';

import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";
// import bmDiffIcon from '../../assets/icons/bmDifficultyIcon.svg';
// import easyDiffIcon from '../../assets/icons/easyCircleIcon.svg';
// import normalDiffIcon from '../../assets/icons/normalCircleIcon.svg';
// import hardDiffIcon from '../../assets/icons/hardCircleIcon.svg';
import playIcon from '../../assets/icons/playIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';
import verifiedIcon from "../../assets/icons/verifiedIcon.svg";
import easyIcon from "../../assets/icons/bmEasyIcon.svg";
function BeatmapPage() {

    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAP</div>
                <div className={styles.bmContent}>
                    <div className={styles.bmSongInfoSection}>
                        <div className={styles.bmSongName}>
                            Celtic Whispers Ballad
                        </div>
                        <div className= {styles.countInfoSection}>
                            <div className={styles.playCountInfo}>
                                <img src={playIcon} className={styles.infoSvg} alt="" />
                                <b>
                                   504
                                </b>
                            </div>
                            <div className={styles.heartCountInfo}>
                                <img src={heartIcon} className={styles.infoSvg} alt="" />
                                <b>
                                    154
                                </b>
                            </div>
                        </div>
                        <div className={styles.bmAdditionalInfoSection}>
                            <div className={styles.bmArtistInfoSection}>
                                <div className={styles.artistDetails}>
                                    <img className={styles.artistImage} src={artist2Image}/>
                                    <div className={styles.artistTitleContainer}>
                                        <div className={styles.artistName}>
                                            Folklore Minstrel
                                        </div>
                                        <img className={styles.verifiedIcon} src={verifiedIcon}/>
                                    </div>
                                </div>
                                <div className={styles.releaseDate}>
                                    released 1/8/24
                                </div>    
                            </div>
                            <div className= {styles.bmDifficultyInfoSection}>
                                <img src={easyIcon} className={styles.diffIcon} />
                                <div className={styles.difficultyScore}>
                                    2.3
                                </div>
                            </div>
        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeatmapPage;




