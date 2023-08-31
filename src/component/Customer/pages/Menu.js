import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from './Footer';
import $ from 'jquery';
import { Col, Form, Row } from 'react-bootstrap';
// import Breakfastapp from './Breakfastapp';
// import Dinnerapp from './Dinnerapp';
// import Launchapp from './Launchapp';
import eat from "../../../../src/assest/images/menu-page/eat.png";
import axios from 'axios';
import PostertopApp from './postertop';
import { Base_url } from '../../../api/const';

export default function Menu() {
  const [category, setCategory] = useState([]);
  const [filtercategoy, setFilterCategory] = useState([]);
  const [productdetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios.get(Base_url+'catagery')
      .then((res) => {
        setCategory(res.data)
      })
  }, [])

  useEffect(() => {
    axios.get(Base_url+"menu")
      .then((res) => {
        setProductDetails(res.data)
      })
  }
  )

  return (
    <>
      <Header />
      <PostertopApp name="Food Menu"/>
      <div className="Container-fluid p-0" id='ourmenu'>

        <div className='container mt-5'>
          <Col className='position-relative '>
            <h4 className='menu text-center text-danger' id='twoline' data-aos="fade-up" data-aos-duration="500">Food Menu</h4>
          </Col>
          <h2 className='text-center mt-2 fs-1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Most Popular Items</h2>
        </div>

        <Col className='mb-4'>
          <form>
            <select title="Select Category" className="form-control" onChange={(e) => setFilterCategory(e.target.value)}>
              <option>- Select Category -</option>
              {category && category.map((item) => {
                return (
                  <option value={item.category}>{item.category}</option>
                )
              })}
            </select>
          </form>
        </Col>

        <Row>
          {productdetails && productdetails.map((row) => {
            return (
              (row.productcategory == filtercategoy ?
                <Col sm={10} md={5} lg={4} className='mx-auto mt-md-3  items'data-aos="fade-up" data-aos-duration="1000"  align="center" >
                  <img src={row.productimgurl} alt="Gujarati Thali" className='brakfast img-fluid d-block' />
                  <h5 className='mt-2'>{row.productname}</h5>
                  <p className='mt-2'>{row.productdeatail}</p>
                </Col> : "")
            )
          })}
        </Row>


      </div>
      <Footer />
    </>
  )
}
