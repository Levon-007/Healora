import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHorizontalRule } from "react-icons/go";
import ".././About/About.css"
import Aboutimg from "../../assets/Aboutus.jpg"
import Savelife from "../../assets/savelife.jpg"
import { LuRadius } from 'react-icons/lu';
import { GiHeartPlus } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Homecard from '../../Common Design/Homecard';
import Doctorimg from "../../assets/doctoraboutpage.jpg";
import heartrate from '../../assets/heart_rate.png';
export default function About() {
    return (
        <div className='aboutbg'>
            <div className='background1'>
                <Container>
                    <Row>
                        
                        <Col md={5}>
                            <h4 className='abouth4 '>ABOUT US <GoHorizontalRule /></h4>
                            <h2 className='abouth2'>Caring Today,</h2>
                            <h2 className='abouth2'>Healthier Tomorrow</h2>
                            <p className='aboutp py-2 '>Healora Hospital is dedicated to providing
                                compassionate, advanced and personalized
                                healthcare services for a healthier community.</p>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='my-4'>
                <Container>
                    <Row>
                        <Col md={5}>
                            <img src={Savelife} style={{ margin: '', width: '450px', height: '300px', margin: '10px', borderRadius: '10px' }} className='w-100 mx-0' alt="" />
                        </Col>
                        <Col md={6}>
                            <h4 className='my-4 '>OUR MISSION <GoHorizontalRule /></h4>
                            <h2>Better Care.A Healthier Community</h2>
                            <p className='py-2 '>To deliver high-quality medical care with compassion,
                                innovation and integrity, improving lives every day.</p>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={1}>
                        </Col>
                        <Col md={1}>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col md={8}>
                            <h4 className='my-2 '>WHY CHOOSE US <GoHorizontalRule /></h4>
                            <h2>Trusted Healthcare Partner
                            </h2>
                            <p className='py-2 '> With expert doctors, modern facilities and a patient-first approach,we are committed to your well-being at every step.</p>
                            <Row className='aboutbox'>
                                <Col md={8} className='d-md-flex d-none'>
                                    <Homecard title={<GiHeartPlus />} content={"Advanced Medical Care"} />
                                    <Homecard title={<FaUserDoctor />} content={"Expert Doctors"} />
                                    <Homecard title={<FaBed />} content={"Modern Facilities"} />
                                    <Homecard title={<FiHeart />} content={"Compassionate Support"} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <img src={Doctorimg} alt="" className='w-100 m-0 p-2' style={{ margin: '30px', padding: '10px', width: '450px', height: '350px', borderRadius: '20px' }} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='commit my-4 p-2'>
                <Container className=''>
                    <Row>
                        <Col md={6} sm={2}>
                            <h2>Our Commitment</h2>
                            <p>At MediNova, we prioritize your health and comfort.
                                Our team is here to support you with the best medical
                                care, always.</p>
                        </Col>
                        <Col md={6} >
                        <img src={heartrate} style={{width:'600px',height:'150px'}} className='w-100' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
