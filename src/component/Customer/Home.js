import React, { useEffect, useState } from 'react';
import { Col, Row, } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import cook from "../../assest/images/home-page/header/cook.jpg";


import hotdog from "../../assest/images/home-page/brackfast/hot-dog.jpg";
import number1 from "../../assest/images/home-page/menu/number-1.png";
import number2 from "../../assest/images/home-page/menu/number-2.png";
import number3 from "../../assest/images/home-page/menu/number-3.png";
import number4 from "../../assest/images/home-page/menu/number-4.png";
import number5 from "../../assest/images/home-page/menu/number-5.png";
import number6 from "../../assest/images/home-page/menu/number-6.png";
import deliverfood from "../../assest/images/home-page/delivery-service/ffd.jpg";

import burger from "../../assest/images/home-page/slider/burger.png"
import pizza from "../../assest/images/home-page/slider/pizza.png"
import Header from './Header';
import Footer from './pages/Footer';
import axios from 'axios';
import { Base_url } from '../../api/const';



export default function Home() {
       
        // add data from api  
    const [addimg, setaddimg] = useState([]);

    useEffect(() => {
        axios.get(Base_url+"image")
            .then((res) => {
                setaddimg(res.data)
            })
    }, [])


    return (
        <>
            <Header />
            <div className='container pb-5'>
                <div id='header'>
                    <Row>
                        <Col className='col-lg-6 col-12 detail' data-aos="fade-right" data-aos-duration="1000"><h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000"
                             className='m-0'> <span className="text-danger">Dining</span> <br />
                            On The Lake
                        </h1>
                            <p className="fs-5 ">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, libero cumque labore ratione excepturi quam possimus animi sit sapiente.</p>
                            <Link to="/Menu">
                                <button type='button ' className=' rounded-pill bg-danger border border-0 btn' href="/#">VIEW MENU</button>
                            </Link>
                        </Col>
                        <Col className='col-lg-6 col-12 imagee'>
                            <img src={cook} alt="cook" className="img-fluid rounded-circle cook" /> </Col>

                    </Row>
                    <Row className="Container food-items mx-auto">
                        {addimg && addimg.map((row) => {
                            return (


                                <Col sm={10} md={6} lg={3} className="food-item  mt-sm-3 mx-auto position-relative" data-aos="zoom-in" data-aos-duration="1000">

                                    <img src={row.imgurl} alt="green salad" className="img-fluid" />
                                </Col>
                            )
                        })}

                    </Row>



                </div>
            </div>
            {/* brackfast section start */}
            <div className="container-fluid " id="breakfast">
                <div className="Container p-5">
                    <Col sm={5} md={4} lg={4} className="redcontainer rounded-circle float-end" data-aos="zoom-in" data-aos-duration="1000">
                    </Col>
                    <Col sm={10} md={10} lg={10} className="hotdog" >
                        <img src={hotdog} alt="Hotdog" className="img-fluid" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" />
                    </Col>
                    <Col sm={8} md={6} lg={4} className="p-4 p-md-5 p-lg-5 bg-white card text-center" data-aos="fade-up" data-aos-duration="2000">
                        <h1>Breakfast</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <Link to="/Menu">
                            <button type='button' className="rounded-pill bg-danger w-100">Order Now</button>
                        </Link>

                    </Col>
                </div>
            </div>



            {/* menu section start */}
            <div className='container-fluid' id="menu">
                <div className="Container empty"></div>
                <div className="container menu-main text-white p-5 ">
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number1} alt="number-1" className="img-fluid number" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Fresh Food</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number2} alt="number-2" className="img-fluid" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Gujarati</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number3} alt="number-3" className="img-fluid" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Punjabi</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number4} alt="number-2" className="img-fluid" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Chinese</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number5} alt="number-2" className="img-fluid" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Pizza && Pasta</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>
                    <Col className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <Col>
                            <Col>
                                <Row>
                                    <Col sm={8} md={6} lg={5} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number6} alt="number-2" className="img-fluid" />
                                    </Col>
                                    <Col sm={8} md={6} lg={7}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Spicial</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                {/* <Link to="/Menu"> */}
                                <button type='button' href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</button>
                                {/* </Link> */}
                            </Col>
                        </Col>
                    </Col>


                </div>
            </div>


            {/* devilery-service section start */}
            <div className='container-fluid devilery-service' >
                <Row>
                    <Col sm md lg>

                    </Col>

                </Row>
                <div className="service-bg 
                bg-danger">
                    <Col>
                        <img src={deliverfood} alt="tff" className="img-fluid w-75" data-aos="fade-right" style={{ animation: "fadeInLeftBig 2s linear 1" }} />
                    </Col>
                    <Col xs={10} sm={8} md={6} lg={5} className=" service-card p-4 p-md-5 p-lg-5 text-bg-dark" data-aos="zoom-up" data-aos-duration="1000" data-aos-delay="1500">
                        <h1>Our Service</h1>
                        <p>Id faucibus nisl tincidunt eget nullam non nisi. Amet dictum sit amet justo donec enim diam vulputate ut. Non quam lacus suspendisse faucibus interdum. Ac ut consequat semper viverra nam. Auctor augue mauris augue neque gravida in fermentum et.</p>
                        <button type='button' variant="outline-primary" className="rounded-pill">LEARN MORE</button>
                    </Col>
                </div>
            </div>

            {/* fastfood section start */}
            <div className='Container-fuild' id="fastfood">
                <Row>
                    <Col sm={10} md={8} lg={8} className="p-5 text-white fastfood-inner">
                        <Col className="indian">
                            <h3 className="ms-1" data-aos="flip-up" data-aos-duration="1000">MUST - TRY INDIAN FOOD</h3>
                            <h1 className="mt-3" data-aos="fade-right" data-aos-duration="1000">Indian Food</h1>
                            <button type='button' href="#" variant="danger" className="rounded-pill mt-3 ms-1 ">LEARN MORE</button>
                        </Col>
                    </Col>
                </Row>
            </div>

            <div className="container pb-5" id="burger" >



                <Col sm={10} md={8} lg={8} className="mx-auto text-center mt-5">
                    <h1>Burger Menu</h1>
                    <p className="m-3">You're gonna need two hands to hold our toasted buns. Our fresh, juicy burgers are served up medium-well with a side of fries and a whole lot of flavor.</p>
                </Col>
                <div className="Container burger-items">

                    <Row>
                        <Col sm={12} md={6} lg={6} className="burger-box burger1 m-0 p-0" data-aos="fade-right" data-aos-duration="1000" >
                            <Col className="text-white burger-info text-center">
                                <h2>Double burger</h2>
                                <h5 className="text-danger">$ 8.50</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>

                        </Col>


                        <Col sm={12} md={6} lg={6} className="burger-box burger2 mt-4 mt-md-0 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <Col className="text-white burger-info text-center">
                                <h2>burger</h2>
                                <h5 className="text-danger">$10.34</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="burger-box burger3 mt-4 m-0 p-0" data-aos="fade-right" data-aos-duration="1000">
                            <Col className="text-white burger-info text-center">
                                <h2>Bacon Burger</h2>
                                <h5 className="text-danger">$ 8.00</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="burger-box burger4 mt-4 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <Col className="text-white burger-info text-center">
                                <h2>Special Offer</h2>
                                <h5 className="text-danger">$ 15.00</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="burger-box burger5 mt-4 m-0 p-0" data-aos="fade-right" data-aos-duration="1000">
                            <Col className="text-white burger-info text-center">
                                <h2>Black Burger</h2>
                                <h5 className="text-danger">$ 11.00</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="burger-box burger6 mt-4 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <Col className="text-white burger-info text-center">
                                <h2>king Burger</h2>
                                <h5 className="text-danger">$ 11.00</h5>
                                <button type='button' variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </button>
                            </Col>
                        </Col>
                    </Row>

                </div>
            </div>


            {/* slider section start */}
            <div className='container-fluid' id="slider">
                <Row className="p-5">
                    <Col md={5} lg={5} className="bg-white rounded-2 text-center">
                        <Col id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <Col className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </Col>
                            <Col className="carousel-inner">
                                <Col className="carousel-item active">
                                    <Col xs={6} sm={6} md lg={3} className="mx-auto">
                                        <img src={burger} className="img-fluid" alt="Burger" />
                                    </Col>
                                    <h3 className="text-danger">Burger</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique officiis enim eos recusandae veniam animi ut minus, tenetur, a dignissimos vitae voluptatibus aliquid magnam ipsam repudiandae ipsum id rerum?</p>
                                </Col>
                                <Col className="carousel-item">
                                    <Col xs={6} sm={6} md lg={3} className="mx-auto">
                                        <img src={pizza} className="img-fluid" alt="Burger" />
                                    </Col>
                                    <h3 className="text-danger">Pizza & Pasta</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique officiis enim eos recusandae veniam animi ut minus, tenetur, a dignissimos vitae voluptatibus aliquid magnam ipsam repudiandae ipsum id rerum?</p>
                                </Col>
                            </Col>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </Col>
                    </Col>
                </Row>
            </div>
            <Footer />
           
        </>
    )
}



