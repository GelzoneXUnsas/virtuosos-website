import React from 'react';

import styles from './Footer.module.css';

import logoIcon from '../../assets/icons/logoIcon.svg';

const Footer = () => {
    return (
        <div className={styles.header} >
            <div className={styles.headerLogo}>
                <img className={styles.headerLogoImage} alt="" src={ logoIcon } />
            </div>
            <div className={styles.headerMenu}>
                <div className={styles.headerMenuButton}>
                    <b className={styles.headerMenuButtonText}>MENU</b>
                    <img className={styles.menubuttonIcon} alt="" src="/menubutton.svg" />
                </div>
            </div>
            
        
        </div>
    );
}

export default Footer;