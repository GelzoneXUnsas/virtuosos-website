import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GalleryPage.module.css";

import Table from "../../Table";

import React from "react";

import headerBackground from '../../assets/images/headerBackground.png';
import virtuososTitle from '../../assets/icons/virtuososTitle.svg';
import logoIcon from '../../assets/icons/logoIcon.svg';

import instragramIcon from "../../assets/icons/instagramIcon.svg";
import xIcon from "../../assets/icons/xIcon.svg";
import tiktokIcon from "../../assets/icons/tiktokIcon.svg";

const GalleryPage = () => {
    return (
        <div className={styles.gallerypage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
            </div>
        </div>
        
    );
};

export default GalleryPage;