import React from 'react'
import "../Appointment/Appointment.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCheckCircle } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import heartrate from "../../assets/heart_rate.png";
import { GoHorizontalRule } from "react-icons/go";
export default function Appointment() {
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
        <div className='appointmentbg'>
            <div className='background4'>
                <Container>
                    <Row>

                        <Col md={5}>
                            <h4 className='appointmenth4'>BOOK AN APPOINTMENT<GoHorizontalRule /></h4>
                            <h2 className='appointmenthead'>Book Your Appointment</h2>
                            <h2 className='appointmenthead'>with Ease</h2>
                            <p className='appointmentp '>Get quality healthcare at your convenience.</p>
                            <p className='appointmentp'>Schedule your appointment today.</p>
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
            <div className='appointmentsec w-100 m-0 m-md-4'>
                <Container>
                    <Row>

                        <Col md={6}>
                            <div className='appointmentform my-3 my-md-0'>
                                <h5>Appointment Form</h5>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>Full Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"


                                            />
                                            <Form.Control.Feedback></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                            <Form.Label>Mobile Number *</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    type="tel"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">

                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6">
                                            <Form.Label>Select Department *</Form.Label>
                                            <Form.Select aria-label="Default select example" required
                                            >
                                                <option>Choose Department</option>
                                                <option value="1">General Medicine</option>
                                                <option value="2">Cardiology</option>
                                                <option value="3">Neurology</option>
                                                <option value="4">Orthopedics</option>
                                                <option value="5">Pediatrics</option>
                                                <option value="6">Gynecology & Obstetrics</option>
                                                <option value="7">Dermatology</option>
                                                <option value="8">Pulmonology</option>
                                                <option value="9">Gastroenterology</option>
                                                <option value="10">General Surgery</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a valid subject for your enquiry.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>Preferred Date *</Form.Label>
                                            <Form.Control
                                                required
                                                type="date"
                                            />
                                            <Form.Control.Feedback></Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} placeholder="Additional Message (Optional)" required />
                                        </Form.Group>
                                    </Row>

                                    <Button type="submit">Book Appointment</Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={6}>
                             <div className='appointmentdetails my-4 my-md-0'>
                            <h5>Why choose Healora?</h5>
                            <p className='appointmentsecp'><FaCheckCircle /> Experienced & Compassionate Doctors</p>
                            <p className='appointmentsecp'><FaCheckCircle /> State-of-the-Art Technology</p>
                            <p className='appointmentsecp'><FaCheckCircle /> Personalized Treatment Plans</p>
                            <p className='appointmentsecp'><FaCheckCircle /> 24/7 Emergency Care</p>
                             <Col md={12}>
                                <img src={heartrate} style={{ width: '600px', height: '100px' }} className='w-100' alt="" />
                            </Col>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}
