import React from 'react'
import "../Service/Service.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHorizontalRule } from "react-icons/go";
import { FaStethoscope } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { BsFillLungsFill } from "react-icons/bs";
import { GiPelvisBone } from "react-icons/gi";
import { GiStomach } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import serviceimg from "../../assets/serviceequip.jpg"
import { FaCheckCircle } from "react-icons/fa";

import Servicebox from '../../Common Design/Servicebox';
import AppointmentButton from '../../Common Design/AppointmentButton';
import { useNavigate } from 'react-router-dom';

export default function Service() {
    const navigate = useNavigate();
    return (
        <div className='servicebg'>
            <div className='background2 '>
                <Container>
                    <Row>
                        
                        <Col md={5}>
                            <h4 className='serviceh4  '>OUR SERVICES <GoHorizontalRule /></h4>
                            <h2 className='serviceh2'>Comprehensive</h2>
                            <h2 className='serviceh2'> Healthcare Services</h2>
                            <p className='servicep py-2 '>From preventive care to advanced treatments,
                                we offer a wide range of medical services under
                                one roof.</p>
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

            <div>
                <Container className='my-5'>
                    <Row>
                        <Col md={4} >
                            <Servicebox title={<FaStethoscope style={{color:"#22d3f4"}} />} content1={"General Medicine"} content2={"Expert care for all ages"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<LuHeartPulse style={{color:"#22d3f4"}}/>} content1={"Cardiology"} content2={"Advanced heart care"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<LuBrain style={{color:"#22d3f4"}}/>} content1={"Neurology"} content2={"Expert neurological care"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Servicebox title={<BsFillLungsFill style={{color:"#22d3f4"}}/>} content1={"Pulmonology"} content2={"Breathe easier"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<GiPelvisBone style={{color:"#22d3f4"}}/>} content1={"Orthopedics"} content2={"Move better,live stronger"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<GiStomach style={{color:"#22d3f4"}}/>} content1={"Gynecology & Obsterics"} content2={"Care for every stage"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Servicebox title={<LuBaby style={{color:"#22d3f4"}}/>} content1={"Pediatrics"} content2={"Healthy beginnings"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<FaDroplet style={{color:"#22d3f4"}}/>} content1={"Dermatology"} content2={"Healthy skin,confident you"} />
                        </Col>
                        <Col md={4}>
                            <Servicebox title={<FaPlusSquare style={{color:"#22d3f4"}}/>} content1={"Internal Medicine"} content2={"holistic care for adults"} />
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className='commit '>
                <Container className='w-100  p-2'>
                    <Row>
                        <Col md={6} sm={2}>
                            <h4>Our Special Features</h4>
                            <h2>Why choose Healora?</h2>
                            <p>Because your health deserves the best.</p>
                            <p><FaCheckCircle /> Experienced & Compassionate Doctors</p>
                            <p><FaCheckCircle /> State-of-the-Art Technology</p>
                            <p><FaCheckCircle /> Personalized Treatment Plans</p>
                            <p><FaCheckCircle /> 24/7 Emergency Care</p>
                            <div onClick={() => navigate('/appointment')} style={{ display: 'inline-block', cursor: 'pointer'}} className='d-flex'><AppointmentButton  content={"Book Appointment"}/></div>

                        </Col>
                        <Col md={6} >
                            <img src={serviceimg} style={{ width: '450px', height: '300px',borderRadius:'10px' }} className='w-100 m-0' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
