import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/Footer.css'
import healoraLogo from '../../assets/logo.png';
import heartrate from '../../assets/heart_rate.png';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoPeopleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
    return (
        <div className='footer w-100' style={{backgroundColor:"#12304A"}}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='footer1'>
                            <img src={healoraLogo} className='healoralogo' style={{ width: "190px",backgroundColor:"#ffff",margin:"13px 10px",borderRadius:"50px" }} alt="" />
                            <h2 className='h2'>Better Care. Healthier Tomorrow.</h2>
                            <p className='p'>We are committed to providing compassionate, advanced and personalized healthcare services for a healthier community.</p>
                            <img src={heartrate} className='heartrateimg w-100' alt="heartrategraph" />
                            <div className='logos'>
                                <div className='logo'><VscWorkspaceTrusted />
                                <h6 className='text'>Trusted Care</h6>
                                </div>
                                <div className='logo'> <IoPeopleOutline />
                                <h6 className='text'>Expert Doctors</h6></div>
                                <div  className='logo'> <IoMdHeartEmpty />
                                <h6 className='text'>Advanced Technology</h6></div>
                            </div>
                        </div>

                    </Col>
                    <Col md={2}>
                    <div className='quicklink'>
                        <h2>Quick Links</h2>
                       <Navbar>
                        <Nav className=" custom-nav-links d-flex flex-column align-items-start">
                    <Nav.Link href="#home" className="custom-nav-link">
                       <IoIosArrowForward /> HOME
                    </Nav.Link>

                    <Nav.Link href="#about" className="custom-nav-link">
                       <IoIosArrowForward /> ABOUT US
                    </Nav.Link>

                    <Nav.Link href="#services" className="custom-nav-link">
                       <IoIosArrowForward /> SERVICES
                    </Nav.Link>

                    <Nav.Link href="#specialities" className="custom-nav-link">
                       <IoIosArrowForward /> SPECIALITIES
                    </Nav.Link>

                    <Nav.Link href="#contact" className="custom-nav-link">
                       <IoIosArrowForward /> CONTACT
                    </Nav.Link>

                    <Nav.Link href="#appointment" className="custom-nav-link">
                       <IoIosArrowForward /> BOOK APPOINTMENT
                    </Nav.Link>
                </Nav>
                        </Navbar>
           
  
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className='speciality'>
                        <h2>Our Specialities</h2>
                        <h4>General Medicine</h4>
                        <h4>Cardiology</h4>
                        <h4>Orthopedics</h4>
                        <h4>Gynecology & Obstetrics</h4>
                        <h4>Pediatrics</h4>
                        <h4>Dermatology</h4>
                        <h4>Neurology</h4>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className='contact'>
                        <h2>Contact Us</h2>
                        <h4  ><FaLocationDot style={{color:"#22d3f4"}} /> 123 Health Care Road, Chennai, Tamil Nadu - 600001</h4>
                        <h4><FaPhoneAlt style={{color:"#22d3f4"}}/> +91 44 1234 5678</h4>
                        <h4><MdOutlineEmail style={{color:"#22d3f4"}}/> info@healora.com</h4>
                        <h4><FaRegClock style={{color:"#22d3f4"}}/> Mon - Sat: 8:00 AM - 8:00 PM (Emergency 24/7)</h4>
                    </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}><p className='rights'>© 2026 Healora Hospital & Healthcare. All rights reserved.</p></Col>
                    <Col md={2}></Col>
                    <Col md={4}><p className='rights'> | Privacy | Terms & Conditions | Sitemap</p></Col>
                    <Col md={2} className='m-2 m-md-0'><span className='socialmedia '><FaFacebookF /> </span>
                    <span className='socialmedia '><FaInstagram /> </span>
                    <span className='socialmedia '> <FaLinkedinIn /></span>
                    <span className='socialmedia '> <BsYoutube /></span></Col>

                </Row>
            </Container>
            
        </div>
    )
}
