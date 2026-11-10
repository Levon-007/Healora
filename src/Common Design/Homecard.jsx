import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Homecard({title,content}) {
  return (
    <div style={{margin:'10px',padding:'10px'}}>
      <Card style={{ width: '160px' , height:'110px',margin:'10px' ,textAlign:'center',backgroundColor:'#12304A'}}>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
        <Card.Text style={{textAlign:'center',width:'100%',color:'white'}}>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
