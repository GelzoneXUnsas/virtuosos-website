import React from 'react';

import styles from './Footer.module.css';

import logoIcon from '../../assets/icons/logoIcon.svg';
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import xIcon from "../../assets/icons/xIcon.svg";
import tiktokIcon from "../../assets/icons/tiktokIcon.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.footerSections}>
            <div className={styles.footerSectionPageItem}>
                Beatmaps
            </div>
            <div className={styles.footerSectionPageItem}>
                Artists
            </div>
            <div className={styles.footerSectionPageItem}>
                Community
            </div>
            <div className={styles.footerSectionPageItem}>
                Art
            </div>
            </div>
            <div className={styles.footerSocials}>
            <div className={styles.footerSocialsItem}>
                <img src={logoIcon} alt="Virtuosos Logo" />
            </div>
            <div className={styles.footerSocialsItem}>
                <img src={instagramIcon} alt="Instagram Logo" />
            </div>
            <div className={styles.footerSocialsItem}>
                <img src={xIcon} alt="X (Twitter) Logo" />
            </div>
            <div className={styles.footerSocialsItem}>
                <img src={tiktokIcon} alt="Tiktok Logo" />
            </div>
            </div>
            <div className={styles.footerEmail}>
                contact virtuosos.game@gmail.com for support
            </div>
        </div>
    </div>
    );
}

export default Footer;