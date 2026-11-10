import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/Menubar.css';
import healoraLogo from '../../assets/logo.png';
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
return ( <Navbar expand="lg" className="custom-nav w-100"> <Container fluid="lg">


            {/* Logo on the left */}
            <Navbar.Brand href="#home" className="healora-brand">
                <img
                    src={healoraLogo}
                    alt="Healora Logo"
                    className="healora-logo"
                />
            </Navbar.Brand>

            {/* Hamburger on the right */}
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggler"
            />

            {/* Collapsible navigation */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto custom-nav-links ">
                    <Nav.Link as={Link} to="/" href="#home" className="custom-nav-link">
                        HOME
                    </Nav.Link>

                    <Nav.Link as={Link} to="/about" href="#about" className="custom-nav-link">
                        ABOUT US
                    </Nav.Link>

                    <Nav.Link as={Link} to="/service" href="#services" className="custom-nav-link">
                        SERVICES
                    </Nav.Link>

                    {/* <Nav.Link href="#specialities" className="custom-nav-link">
                        SPECIALITIES
                    </Nav.Link> */}

                    <Nav.Link as={Link} to="/contact" href="#contact" className="custom-nav-link">
                        CONTACT
                    </Nav.Link> 

                    <Nav.Link as={Link} to="/appointment" href="#appointment" className="nav-button">
                       <FaRegCalendarAlt className='mx-2 text-center fs-6'/>  BOOK APPOINTMENT
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
);


}
