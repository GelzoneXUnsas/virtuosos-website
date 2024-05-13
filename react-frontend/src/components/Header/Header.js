import React from 'react';

import styles from './Header.module.css';


import logoIcon from '../../assets/icons/logoIcon.svg';
import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    return (
        <div className={styles.header} >
            <div className={styles.headerLogo}>
                <img className={styles.headerLogoImage} alt="" src={ logoIcon } />
            </div>
            <div className={styles.headerMenu}>
                <div className={styles.headerMenuButton}>
                    <b className={styles.headerMenuButtonText}>MENU</b>
                    <img className={styles.menubuttonIcon} alt="" src={closedMenuIcon } />
                </div>
            </div>
            
        
        </div>
    );
}

export default Header;