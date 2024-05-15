import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';


import logoIcon from '../../assets/icons/logoIcon.svg';
import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);

        return ()=>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className={styles.header} >
            <div className={styles.headerLogo}>
                <img className={styles.headerLogoImage} alt="" src={ logoIcon } />
            </div>
            <div className={styles.headerMenu} ref={menuRef}>
                <div className={styles.headerMenuButton} onClick={()=>{setOpen(!open)}}>
                    <b className={styles.headerMenuButtonText}>MENU</b>
                    <img className={styles.menubuttonIcon} alt="" src={closedMenuIcon } />
                </div>
                
                <div className={`${styles.dropdownMenu} ${open? "active" : ""}`}>
                    <ul>
                        <DropdownItem text={"Login"} link="/" />
                        <DropdownItem text={"Music"} link="/beatmaplisting" />
                        <DropdownItem text={"Art"} link="/gallery" />
                        <DropdownItem text={"Community"} link="/" />
                    </ul>
                </div>
            </div>
            
        
        </div>
    );
}

function DropdownItem(props) {
    const navigate = useNavigate();
    
    function handleClick(){
        navigate(props.link);
    }

    return(
        <button type="button" className={styles.dropdownItem} onClick={handleClick}>
            {props.text}
        </button>
        // <li className='dropdownItem'>
        //     <a>{props.text}</a>
        // </li>

    );
}


export default Header;