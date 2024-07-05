import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import logoIcon from '../../assets/icons/logoIcon.svg';
// import closedMenuIcon from '../../assets/icons/closedMenuIcon.svg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Navbar variant="dark" expand="lg" className={styles.header}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                    className={styles.headerLogo}
                    alt="Virtuosos Logo"
                    src={logoIcon}
                    onClick={() => {
                        navigate("/");
                    }}
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <NavDropdown
                    id="menu-dropdown-button"
                    title="MENU"
                    menuVariant="dark"
                    className={styles.headerMenuButton}
                    align="end"
                    >
                    <NavDropdown.Item href="/beatmaplisting">Beatmaps</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery">Art</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        More Pages Coming Soon
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default Header;