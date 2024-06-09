import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';


import logoIcon from '../../assets/icons/logoIcon.svg';
import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                // console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);

        return ()=>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className={styles.header} >
            <img
              className={styles.headerLogo}
              alt="Virtuosos Logo"
              src={logoIcon}
              onClick={() => {
                navigate("/");
              }}
            />
            <div className={styles.headerMenu} ref={menuRef}>
                <div className={styles.headerMenuButton} onClick={()=>{setOpen(!open)}}>
                    <b className={styles.headerMenuButtonText}>MENU</b>
                    <img className={styles.menubuttonIcon} alt="" src={closedMenuIcon } />
                </div>
                
                <div className={`${styles.dropdownMenu} ${open? styles.dropdownMenuActive: styles.dropdownMenuInactive}`} hidden={!open}>
                    <ul>
                        <DropdownItem text={"Home"} link="/" close={() => setOpen(false)} />
                        <DropdownItem text={"Music"} link="/beatmaplisting" close={() => setOpen(false)}/>
                        <DropdownItem text={"Art"} link="/gallery" close={() => setOpen(false)}/>
                        <DropdownItem text={"Community"} link="/comingsoon" close={() => setOpen(false)}/>
                    </ul>
                </div>
            </div>
            
        
        </div>
    );
}

function DropdownItem(props) {
    const navigate = useNavigate();
    
    function handleClick(){
        props.close()
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