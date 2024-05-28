import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BeatmapPage.module.css";

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

function BeatmapPage() {

    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAP</div>
            </div>
        </div>
    );
}

export default BeatmapPage;




