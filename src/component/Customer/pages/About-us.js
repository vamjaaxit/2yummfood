import React, { useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import Footer from './Footer';
import { Row, Col, Card, CardBody, CardFooter } from 'react-bootstrap';
// import { Card ,CardBody } from 'react-bootstrap';


import dishfood from "../../../assest/images/aboutus-page/food-section/food-1.jpg";
import dokla from "../../../assest/images/aboutus-page/food-section/food-2.jpg";
import vegfood from "../../../assest/images/aboutus-page/food-section/food-3.jpg";
import tikki from "../../../assest/images/aboutus-page/food-section/food-4.jpg";

import PostertopApp from './postertop';
import { Base_url } from '../../../api/const';

export default function Aboutus() {
    // Gallery add data from api  
    const [addGalleryimg, setGalleryaddimg] = useState([]);

    useEffect(() => {
        axios.get(Base_url + "gallery")
            .then((res) => {
                setGalleryaddimg(res.data)
            })
    }, [])

    // OUR TEAM add data from api  
    const [ourteam, setOurteam] = useState([]);

    useEffect(() => {
        axios.get(Base_url + "ourteammaster")
            .then((res) => {
                setOurteam(res.data)
            })
    }, [])
    return (
        <>
            <Header />
            <PostertopApp name="About Us" />
            <div className='container'>
                <Row className='p-5'>
                    <Col sm={12} md={6} lg={6} className='about-container'>
                        <Col className='photos' data-aos="zoom-out" data-aos-duration="500">
                            <img src={dishfood} ali="food1" className='img-fluid w-100' />
                        </Col>
                        <Col className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500">
                            <img src={dokla} ali="food2" className='img-fluid w-75' />
                        </Col>
                        <Col className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1000">
                            <img src={vegfood} ali="food3" className='img-fluid w-75' />
                        </Col>
                        <Col className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1500">
                            <img src={tikki} ali="food4" className='img-fluid w-100' />
                        </Col>
                    </Col>
                    <Col sm={12} md={6} lg={6} className=" ps-lg-5 mt-5 mt-md-0 mt-lg-0 aboutus-details">
                        <Col className='position-relative'>
                            <h4 className='text-danger' id='oneline' data-aos="fade-up" data-aos-duration="500 ">about us</h4>
                        </Col>
                        <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Welcome to Restoran</h1>
                        <p className='text-justify' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <button type='button' className='bg-danger p-3 border border-0 rounded-1' >READ MORE</button>
                    </Col>
                </Row>
            </div>
            <div className='container p-5 pt-3' id='ourteam'>
                <Col className='mb-5 text-center'>
                    <Col className='position-relative'>
                        <h4 className='text-danger' id='twoline' data-aos="fade-up" data-aos-duration="500">Team Members</h4>
                    </Col>
                    <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Our Master Team</h1>
                </Col>
                <Row className='cardrow m-0 p-0'>
                    {ourteam && ourteam.map((row) => {
                        return (




                            <div className='Card m-0 text-center border border-0 bg-light' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                                <Col size={9} className='mx-auto mt-4 rounded-circle imgbox'>
                                    <img src={row.teammasterimgurl} alt=" Bob Brouni" className=" img-fluid rounded-circle " />
                                </Col>
                                <div className='CardBody'>
                                    <h4>{row.teammastername}</h4>
                                    <p>{row.teammasterdetail}</p>
                                </div>
                                <div className='CardFooter bg-transparent border border-0 p-0 cardfottor'>
                                    <Col size={8} className='mx-auto d-flex justify-content-evenly'>
                                        <div className='cardicon'>
                                            <i className='bi bi-facebook'></i>
                                        </div>
                                        <div className='cardicon'>
                                            <i className='bi bi-twitter'></i>
                                        </div>
                                        <div className='cardicon'>
                                            <i className='bi bi-instagram'></i>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        )
                    })}

                </Row>
            </div>


            {/* our service */}
            <div className='container' id='ourservice'>
                <Col size={12} className='position-relative mt-2'>
                    <h3 id='twoline' className='text-center text-danger'>Our Services</h3>
                </Col>
                <Row className='mb-5'>
                    <Col size="10" md="5" lg="3" className='mx-auto servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-person-fill text-danger'></i>
                        <h5 className='my-3'>Master Chefs</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </Col>
                    <Col size="10" md="5" lg="3" className='mx-auto  servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-award-fill text-danger'></i>
                        <h5 className='my-3'>Quality Food</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </Col>
                    <Col size="10" md="5" lg="3" className='mx-auto  servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-clock-fill text-danger'></i>
                        <h5 className='my-3'>24x7 Service</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </Col>
                </Row>
            </div>




            {/* MODAL START HERE */}
            {/* GALLERY SECTION MODAL START */}
            {/* gallery section start */}
            <div className='container-fuild p-0' id='gallery'>
                <Col size={12} className='text-center'>
                    <Col className='position-relative'>
                        <h4 className='text-danger mt-sm-5 mt-5 mt-md-0 mt-lg-0 pt-md-0 pt-lg-0' id='twoline' data-aos="fade-up" data-aos-duration="500">Gallery</h4>
                    </Col>
                    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Some Photos From Our Restaurant</h1>
                </Col>
                <div className='Container-fluid mt-4'>
                    <Row>

                        {addGalleryimg && addGalleryimg.map((row) => {
                            return (

                                <Col sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-aos="zoom-in" data-aos-duration="1000">
                                    <img src={row.Galleryimgurl} alt="our restaurant image-1" className='img-fluid' />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>



            <Footer />
        </>
    )
}
