import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapListingPage.module.css";

import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
import searchIcon from '../../assets/icons/searchIcon.svg';

import cover1 from '../../assets/images/musicCovers/celticwhispersballad.png';
import bmDiffIcon from '../../assets/icons/bmDifficultyIcon.svg';
import easyDiffIcon from '../../assets/icons/easyCircleIcon.svg';
import normalDiffIcon from '../../assets/icons/normalCircleIcon.svg';
import hardDiffIcon from '../../assets/icons/hardCircleIcon.svg';
import playIcon from '../../assets/icons/playIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';

const BeatmapListingPage = () => { 
    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAPS</div>
            </div>
            <div className={styles.beatmapListingSearchFilter}>
                <div className= {styles.beatmapListingSearchItem}>
                    <form action="" className={styles.beatmapListingSearchItem}>
                        <input type="text" placeholder="song, album, artist" />
                        <button type="submit"><img src={searchIcon} alt="" /></button>
                    </form>
                </div>
                <div className={styles.beatmapListingFilterItem}>
                    <select className={styles.beatmapListingFilterItem} placeholder="sort by">
                        <option value="1">sort by: newest</option>
                        <option value="2">sort by: oldest</option>
                        <option value="3">sort by: most played</option>
                        <option value="4">sort by: least played</option>
                    </select>
                </div>
            </div>
            <div className={styles.bmListingDisplayMode}>
                <div className={styles.bmListingDisplayModeContainter}>
                    <div className={styles.bmListinDisplayModeItem}>songs</div>
                    <div className={styles.bmListinDisplayModeItem}>artists</div>
                </div>
                <hr></hr>
                <div className={styles.bmListContainer}>
                    <div className={styles.bmListItem}>
                        <div className={styles.musiccoverIcon}>
                            <img src={cover1} alt="" />
                        </div>
                        <div className={styles.musiccoverInfo}>
                            <div className={styles.songTitleText}>Celtic Whispers Ballad</div>
                            <div className={styles.songArtistText}>Folklore Minstrel</div>
                            <div className={styles.mappedByText}>mapped by Folklore Minstrel</div>
                            <div className={styles.gameInfoSection}>
                                <div className={styles.difficultySection}>
                                    <img src={bmDiffIcon} alt="" />
                                    <img src={easyDiffIcon} alt="" />
                                    <img src={normalDiffIcon} alt="" />
                                    <img src={hardDiffIcon} alt="" />
                                </div>
                                <div className= {styles.countInfoSection}>
                                    <div className={styles.playCountInfo}>
                                        <img src={playIcon} alt="" />
                                        <b>504</b>
                                    </div>
                                    <div className={styles.heartCountInfo}>
                                        <img src={heartIcon} alt="" />
                                        <b>104</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeatmapListingPage;




