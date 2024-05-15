import React, {useState} from 'react';

import styles from './Header.module.css';


import logoIcon from '../../assets/icons/logoIcon.svg';
import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.header} >
            <div className={styles.headerLogo}>
                <img className={styles.headerLogoImage} alt="" src={ logoIcon } />
            </div>
            <div className={styles.headerMenu}>
                <div className={styles.headerMenuButton} onClick={()=>{setOpen(!open)}}>
                    <b className={styles.headerMenuButtonText}>MENU</b>
                    <img className={styles.menubuttonIcon} alt="" src={closedMenuIcon } />
                </div>
                
                <div className={`${styles.dropdownMenu} ${open? "active" : ""}`}>
                    <ul>
                        <DropdownItem text={"LOGIN"} link="/" />
                        <DropdownItem text={"MUSIC"} link="/" />
                        <DropdownItem text={"ART"} link="/gallery" />
                        <DropdownItem text={"COMMUNITY"} link="/beatmaplisting" />
                    </ul>
                </div>
            </div>
            
        
        </div>
    );
}

function DropdownItem(props) {
    return(
        <li className='dropdownItem'>
            <a>{props.text}</a>
        </li>

    );
}


export default Header;