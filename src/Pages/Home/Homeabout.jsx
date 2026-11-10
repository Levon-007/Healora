import React from 'react'
import { FaStethoscope } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { BsFillLungsFill } from "react-icons/bs";
import { GiPelvisBone } from "react-icons/gi";
import { GiStomach } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import Homecard from './../../Common Design/Homecard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHorizontalRule } from "react-icons/go";
import "../Home/Home.css"

export default function Homeabout() {
  return (
    <div className='homeabout d-none d-md-block'>
      <h3 className='m-3 py-5 h5 text-center text-light'><GoHorizontalRule /> OUR DEPARTMENTS <GoHorizontalRule /></h3>
      <h1 className='aboutdept h3 text-center text-light'>Specialized Care for Every Need</h1>
      <Container className='homecard px-3 py-2 mx-5 m-100'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row >
        <Col md={2} > 
          <Homecard title={<FaStethoscope style={{color:"rgb(15, 255, 239)"}}/>} content={"General Medicine"}/>
        </Col>
        <Col md={2}>
           <Homecard title={<LuHeartPulse style={{color:"rgb(15, 255, 239)"}}/>} content={"Cardiology"}/>
        </Col>
         <Col md={2}>
           <Homecard title={<LuBrain style={{color:"rgb(15, 255, 239)"}}/>} content={"Neurology"}/>
        </Col>
         <Col md={2}>
           <Homecard title={<BsFillLungsFill style={{color:"rgb(15, 255, 239)"}}/>} content={"Pulmonology"}/>
        </Col>
         <Col md={2}>
           <Homecard title={<GiPelvisBone style={{color:"rgb(15, 255, 239)"}}/>} content={"Orthopedics"}/>
        </Col>
         <Col md={2}>
           <Homecard title={<GiStomach style={{color:"rgb(15, 255, 239)"}}/>} content={"Gynecology & Obsterics"}/>
        </Col>
         <Col md={2}>
           {/* <Homecard title={<LuBaby />} content={"General Medicine"}/> */}
        </Col>
         <Col md={2}>
           {/* <Homecard title={<LuBaby />} content={"General Medicine"}/> */}
        </Col>
         <Col md={2}>
           <Homecard title={<LuBaby style={{color:"rgb(15, 255, 239)"}}/>} content={"Pediatrics"}/>
        </Col>
         <Col md={2}>
           <Homecard title={<FaDroplet style={{color:"rgb(15, 255, 239)"}}/>} content={"Dermatology"}/>
        </Col>
         <Col md={2}>
           {/* <Homecard title={<LuBaby />} content={"General Medicine"}/> */}
        </Col>
         <Col md={2}>
           {/* <Homecard title={<LuBaby />} content={"General Medicine"}/> */}
        </Col>
       
        
         
      </Row>
    </Container>
    
    </div>
  )
}
