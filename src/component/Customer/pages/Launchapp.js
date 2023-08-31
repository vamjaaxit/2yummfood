import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Base_url } from '../../../api/const';


import {Col,Row } from 'react-bootstrap';
import gujaratiunlimited from "../../../assest/images/menu-page/launch-section/gujarati-unlimitad.jpg";

export default function LaunchApp() {
    const [menu, setmenu] = useState([]);

  useEffect(() => {
    axios.get(Base_url+"menu")
      .then((res) => {
        setmenu(res.data)
      })
  }, [])
  return (
    <div className="Container mb-5" id='launch-menu'>
    
        <Col size={12} className='mt-5'>
            <h3 className='text-center'>Unlimited</h3>
        </Col>
        <Row>
        {menu && menu.map((row) => {
            return (

           
        
        <Col sm={10} md={5} lg={4} className='mx-auto mt-sm-3 mt-md-3 items' align="center" >
            <img src={row.productimgurl} alt="Gujarati Thali" className='img-fluid' />
            <h5 className='mt-2'>{row.productname}</h5>
            <p className='mt-2'>{row.productdeatail}</p>
        </Col>
        )
            })}

      
        </Row>
        </div>

  )
}
