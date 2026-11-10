import React from 'react'
import "../../Pages/Home/Home.css"
import Button from 'react-bootstrap/Button';
import Homebanner from '../../assets/healora_hospital.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiHeartPlus } from "react-icons/gi";
import AppointmentButton from '../../Common Design/AppointmentButton';
import Homebox from '../../Common Design/Homebox';
import { TbHours24 } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';
import Healorabanner from "../../assets/healora-banner.jpg"
import Homeabout from './Homeabout';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    return (

        <div className='background'>
            <div className="homebanner">
                {/* <img src={Homebanner} className='banner w-100' alt="" /> */}
                <Container>

                    <Row>
                        {/* <Col md={1}>

                        </Col> */}
                        <Col md={5}>
                            <h6 className='homequote'>YOUR HEALTH . OUR PRIORITY</h6>
                            <h2 className='homeintro'>Better Care.</h2>
                            <h2 className='homeintro'>Healthier <span>Tomorrow.</span> </h2>
                            <p className='homeintro'>We are committed to providing compassionate, advanced
                                and personalized healthcare services for a healthier community.</p>
                            <div onClick={() => navigate('/appointment')} style={{ display: 'inline-block', cursor: 'pointer'}} className='btns' ><AppointmentButton  content={"Appointment"}  />
                                {/* <Button className='learnmorebtn' variant="outline">Learn More  </Button> */}
                            </div>
                        </Col>
                        <Col md={2}>

                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                   

                </Container>

            </div>

            <div className='heroabout'>
                <Container className='homeboxes'>
                     <Row className='homebox container-fluid w-100 mx-0 my-2 '>
                        {/* <Col md={1}>

                        </Col> */}
                        <Col md={4}>
                            <Homebox logo={<GiHeartPlus />} title={"Trusted Care"} para={"Safe, reliable and patient-focused healthcare services."} />
                        </Col>
                        <Col md={4}>
                            <Homebox logo={<FaUserDoctor />} title={"Expert Doctors"} para={"Experienced specialists with years of dedicated service."} />
                        </Col>
                        <Col md={4}>
                            <Homebox logo={<TbHours24 />} title={"24/7 Support"} para={"Emergency and support services round the clock."} />
                        </Col>

                        {/* <Col md={2}>

                        </Col> */}
                    </Row>

                    <Row>
                        <Col md={4}>
                            <img src={Healorabanner} className='helorabanner w-100' style={{ width: "400px", height: "250px" }} alt="" />
                        </Col>
                        <Col md={4}>
                            <h6 className='header6'>ABOUT HEALORA</h6>
                            <h4 className='homeh4'>A Hospital You Can Trust</h4>
                            <p className='homep'>At Healora, we believe in healing with kindness. Our skilled team,
                                modern facilities and patient-first approach ensure the best care
                                for you and your loved ones.</p>
                        </Col>
                        <Col md={4}>
                            <div className='heroaccord '>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Comprehensive Medical Services
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Ranging from primary and preventive care to specialized clinics, multi-specialty diagnostics, and chronic disease management.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Experienced Medical Professionals</Accordion.Header>
                                        <Accordion.Body>
                                            Board-certified doctors, surgeons, nurses, and care coordinators who collaborate across disciplines (such as cardiology, orthopedics, oncology, and neurology).
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Cutting-Edge Technology</Accordion.Header>
                                        <Accordion.Body>
                                            Advanced medical imaging, robotic-assisted surgery, AI-driven diagnostics, and digital health tracking tools that improve accuracy and minimize recovery times.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Holistic Patient Care</Accordion.Header>
                                        <Accordion.Body>
                                           An approach that integrates physical treatments with mental, emotional, and lifestyle support to foster long-term well-being and recovery.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            {/* <Homeabout content="" className="d-none d-md-block"/> */}
        </div>

    )
}
