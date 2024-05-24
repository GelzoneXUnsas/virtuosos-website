import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapListingPage.module.css";

import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
import searchIcon from '../../assets/icons/searchIcon.svg';
import Form from "../../Form";

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
            </div>
        </div>
    );
};

export default BeatmapListingPage;