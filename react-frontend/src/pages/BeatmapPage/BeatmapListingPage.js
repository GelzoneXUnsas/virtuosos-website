import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapListingPage.module.css";

import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
import searchIcon from '../../assets/icons/searchIcon.svg';


const BeatmapListingPage = () => { 
    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAPS</div>
            </div>
            <div className={styles.beatmapListingSearchFilter}>
                <div className={styles.beatmapListingSearchItem}>
                    <form action="">
                        <input type="text" placeholder="song, album, artist" />
                        <button type="submit"><img src={searchIcon} alt="" /></button>
                    </form>
                </div>
                <div className={styles.beatmapListingFilterItem}>
                    <select className={styles.beatmapListingSearchFilterSelect}>
                        <option value="1">Sort by: Newest</option>
                        <option value="2">Sort by: Oldest</option>
                        <option value="3">Sort by: Most Played</option>
                        <option value="4">Sort by: Least Played</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default BeatmapListingPage;