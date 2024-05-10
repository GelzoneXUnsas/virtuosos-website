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

import art1 from "../../assets/images/galleryArt/art1.png";
import art2 from "../../assets/images/galleryArt/art2.png";
import art3 from "../../assets/images/galleryArt/art3.png";
import art4 from "../../assets/images/galleryArt/art4.png";
import art5 from "../../assets/images/galleryArt/art5.png";
import art6 from "../../assets/images/galleryArt/art6.png";
import art7 from "../../assets/images/galleryArt/art7.png";
import art8 from "../../assets/images/galleryArt/art8.png";

const GalleryPage = () => {
    return (
        <div className={styles.gallerypage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>GALLERY</div>
            </div>
            <div className="searchBar">

            </div>
            <div className="menuContainer">
                <div className={styles.menuTitle}>
                    <div className={styles.screenArtMenuTitleText}>screen art</div>
                    <div className={styles.musicCoverMenuTitleText}>music covers</div>
                </div>
                <div className={styles.menuDivider}></div>
            </div>
            <div className={styles.imageParent}>
                <div className={styles.imageGrid}>
                    <img className={styles.artImage} src={art1} alt="" />
                    <img className={styles.artImage} src={art2} alt="" />
                    <img className={styles.artImage} src={art3} alt="" />
                    <img className={styles.artImage} src={art4} alt="" />
                    <img className={styles.artImage} src={art5} alt="" />
                    <img className={styles.artImage} src={art6} alt="" />
                    <img className={styles.artImage} src={art7} alt="" />
                    <img className={styles.artImage} src={art8} alt="" />
                </div>
            </div>
        </div>

    );
};

export default GalleryPage;