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
                    {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        </div> */}
                    <ul>
                        <DropdownItem text={"Login"} link="/" />
                        <DropdownItem text={"Music"} link="/beatmaplisting" />
                        <DropdownItem text={"Art"} link="/gallery" />
                        <DropdownItem text={"Community"} link="/comingsoon" />
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