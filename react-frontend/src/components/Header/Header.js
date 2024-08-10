import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

import logoIcon from '../../assets/icons/ongawaIconWhite.svg';
// import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const navigate = useNavigate()
    const { currUser } = useAuth()
    const { userLoggedIn } = useAuth()

    return (
        <>
        <Navbar variant="dark" expand="lg" 
            className="header fixed top-0 left-0 w-full h-[75px] bg-header-gradient z-[100] mb-[-75px] flex justify-between items-center overflow-visible">
            <Container fluid>
                <Navbar.Brand>
                    <img
                        className={styles.headerLogo}
                        alt="Virtuosos Logo"
                        src={logoIcon}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </Navbar.Brand>
                <NavDropdown
                    id="menu-dropdown-button"
                    title="MENU"
                    menuVariant="dark"
                    className={styles.headerMenuButton}
                    align="end" // Align the dropdown menu to the end (right side)
                >
                    {userLoggedIn ? <NavDropdown.Item disabled={true} >Welcome Back, {currUser.displayName ? currUser.displayName : currUser.email}!</NavDropdown.Item> : <NavDropdown.Item disabled={true}>Who Are You? :0</NavDropdown.Item>}
                    <NavDropdown.Item onClick={() => navigate('/')}>Home</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/beatmaplisting')}>Beatmaps</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/gallery')}>Art</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item onClick={() => navigate('/comingsoon')}>
                        More Pages Coming Soon
                    </NavDropdown.Item>  */}

                    {userLoggedIn ?
                        <NavDropdown.Item onClick={() => doSignOut().then(() => { navigate('/login') }) }>SignOut</NavDropdown.Item>
                    :
                        <NavDropdown.Item onClick={() => navigate('/login')}>Login</NavDropdown.Item>
                    }
                </NavDropdown>
            </Container>
        </Navbar>
        </>
    );
}


export default Header;