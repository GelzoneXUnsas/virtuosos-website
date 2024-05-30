import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapPage.module.css";
import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
// import searchIcon from '../../assets/icons/searchIcon.svg';

import cover1 from '../../assets/images/musicCovers/celticwhispersballad.png';

import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";

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
                            <div className={styles.bmDifficultySection}>
                                <div className= {styles.bmDifficultyInfoSection}>
                                    <img src={easyIcon} className={styles.diffIcon} />
                                    <div className={styles.difficultyScore}>
                                        2.3
                                    </div>
                                </div>
                                <div className= {styles.bmDiffBar}>
                                    <img src={bmDifficultyBar} className={styles.diffBar} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.beatmapGameInfoSection}>
                        <div className={styles.beatmapInfo}>
                            <img src={cover1} className={styles.coverImg}></img>
                            <div className= {styles.bmInfoSection}>
                                <div className={styles.mapperInfo}>
                                    mapped by Folklore Minstrel
                                </div>
                                <div className={styles.bmData}>
                                    <div className={styles.bmDataItem}>
                                        <img src={durationIcon} className={styles.bmSvg} alt="" />
                                        <b>
                                            3:47
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={bpmIcon} alt="" />
                                        <b>
                                            113
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={noteCountIcon} alt="" />
                                        <b>
                                            185
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={sliderCountIcon} alt="" />
                                        <b>
                                            61
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bmStatInfo}>
                            <div className={styles.bmStatItem}>
                                <div className={styles.bmStatAttribute}>
                                    HP Drain
                                </div>
                                <div className={styles.valueBar}>
                                    <img src={bm30ValueBar} className={styles.bmValueBar} />
                                </div>
                                <div className={styles.bmStatValue}>5</div>
                            </div>
                            <div className={styles.bmStatItem}>
                                <div className={styles.bmStatAttribute}>
                                    Approach Rate
                                </div>
                                <div className={styles.valueBar}>
                                    <img src={bm30ValueBar} className={styles.bmValueBar} />
                                </div>
                                <div className={styles.bmStatValue}>7</div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={styles.bmDescription}>
                            Embark on a folkloric journey with "Celtic Whispers Ballad." 
                            Folklore Minstrel, both artist and beatmap creator, weaves 
                            traditional tunes into an immersive experience. Each note 
                            carries the essence of a rich musical adventure.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeatmapPage;




