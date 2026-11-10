import React from 'react'
import "../Contact/Contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHorizontalRule } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Hospital from "../../assets/hosiptalmini.png";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='contactbg'>
            <div className='background3  mb-5'>
                <Container>
                    <Row>
                        
                        <Col md={4}>
                            <h4 className='contacth4'>CONTACT US<GoHorizontalRule  /></h4>
                            <h2 className='contacthead'>We're Here to Help</h2>
                            <p className='contactp '> Have any questions or need assistance?</p>
                            <p className='contactp'> Feel free to reach out to us.</p>
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
            <div className='contact1 m-4'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='contactsec '>
                            <Row>
                                <Col md={6}>
                                    <h3 className='contactinfoh3 text-light '>Get in Touch</h3>
                                    <h4 className='contactinfo py-2 text-light'><FaPhoneAlt style={{ color: "#22d3f4" ,marginRight:"15px"}} /> +91 44 1234 5678</h4>
                                    <p className='contactp1 mx-4 text-light'> Mon - Sat: 8:00 AM - 8:00 PM</p>
                                    <h4 className='contactinfo py-2 text-light'><MdOutlineEmail style={{ color: "#22d3f4",marginRight:"15px" }} /> info@healora.com</h4>
                                    <p className='contactp1 mx-4 text-light'>We replay within 24 hours</p>
                                    <h4 className='contactinfo py-2 text-light' ><FaLocationDot style={{ color: "#22d3f4",marginRight:"15px" }} /> 123 Health Care Road,</h4>
                                    <p className='contactp1 mx-4 text-light'>Chennai, Tamil Nadu - 600001</p>
                                    <h4 className='contactinfo1 my-4 text-light'>Follow Us</h4>
                                    <span className='socialmedia'><FaFacebookF /> </span>
                                    <span className='socialmedia'><FaInstagram /> </span>
                                    <span className='socialmedia'> <FaLinkedinIn /></span>
                                    <span className='socialmedia'> <BsYoutube /></span>
                                </Col>
                        {/* <Col md={}></Col> */}

                                <Col md={6}>
                                    <img src={Hospital} style={{ width: '400px', height: '350px',borderRadius:'10px' }} className='contactimg  pt-md-0   ' alt="" />
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={5}>
                            <div className='contactform'>
                            <h3 className='contactinfoh3 text-light'>Send Us a Message</h3>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label className='text-light'>Your Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"


                                            />
                                            <Form.Control.Feedback></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                            <Form.Label className='text-light'>Your Email</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    type="email"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">

                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12">
                                            <Form.Label className='text-light'>Subject</Form.Label>
                                            <Form.Select aria-label="Default select example" required
                                            >
                                                <option>Select Subject</option>
                                                <option value="1">General Enquiry</option>
                                                <option value="2">Appointment Enquiry</option>
                                                <option value="3">Doctor Consultation</option>
                                                <option value="4">Medical Services Information</option>
                                                <option value="5">Department Enquiry</option>
                                                <option value="6">Health Checkup Packages</option>
                                                <option value="7">Billing & Payment Enquiry</option>
                                                <option value="8">Insurance Enquiry</option>
                                                <option value="9">Feedback & Suggestions</option>
                                                <option value="10">Complaint</option>
                                                <option value="11">Report an Issue </option>
                                                <option value="12">Other</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a valid subject for your enquiry.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} placeholder="Your Message *" required />
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className='btn btn-danger'>Submit form</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
