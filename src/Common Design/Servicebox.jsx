import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Servicebox({title,content1,content2}) {
    return (
        <div className='servicebox'  style={{margin:'10px',padding:'10px'}}>
            <Card style={{  width: '350px' , height:'170px',margin:'10px' ,textAlign:'center',borderRadius:'10px',backgroundColor:'aliceblue'}} className='w-100 m-0'>
                <Card.Body>
                    <Card.Title style={{textAlign:'center',fontSize:'36px'}}>{title}</Card.Title>
                    <Card.Text style={{textAlign:'center',width:'100%',fontSize:'22px'}}>
                        {content1}
                    </Card.Text>
                    <Card.Text style={{textAlign:'center',width:'100%',fontSize:'15px'}}>
                        {content2}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}
