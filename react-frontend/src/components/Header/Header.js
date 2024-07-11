import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import logoIcon from '../../assets/icons/logoIcon.svg';
// import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Navbar variant="dark" expand="lg" className={styles.header}>
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
                    <NavDropdown.Item onClick={() => navigate('/beatmaplisting')}>Beatmaps</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/gallery')}>Art</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => navigate('/comingsoon')}>
                        More Pages Coming Soon
                    </NavDropdown.Item> */}
                </NavDropdown>
            </Container>
        </Navbar>
    );
}


export default Header;