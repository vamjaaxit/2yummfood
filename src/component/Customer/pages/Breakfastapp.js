import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Base_url } from '../../../api/const';

export default function Breakfastapp() {
  // add data from api  
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    axios.get(Base_url+"menu")
      .then((res) => {
        setmenu(res.data)
      })
  }, [])

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(Base_url+"catagery")
      .then((res) => {
        setCategory(res.data)
      })
  }, [])

  return (

    <>
      <div className='Container' id='breakfast-menu'>
        <Row className='mt-5'>
          <Col sm={10} md={5} lg={4} className='mx-auto items ' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">

            {menu && menu.map((row) => {
              return (
                (row.productcategory === category.category ?
                  <Col>
                    <img src={row.productimgurl} alt="tea" className='img-fluid ' />
                    <h5>{row.productname}</h5>
                    <p>{row.productdeatail}</p>
                  </Col> : "")
              )
            })}
          </Col>
        </Row>
      </div>
    </>
  )
}
