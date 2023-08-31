import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {

    return (
        <>
            {/* <div className='navbar shadow w-100'>
                <Container>
                    <Row className='p-2 w-100'>
                        <Col className='brand-logo col-6 col-md-3'>
                            <h1>2<sub className='text-danger'>Yumm</sub></h1>
                        </Col>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
                        <Col className='col-md-9 col-6'>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <nav class="navbar navbar-expand-lg float-end">


                                <div class="collapse navbar-collapse ">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/Aboutus">About Us</Link>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Service
                                            </Link>
                                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><Link class="dropdown-item" to="/Bookingtable">Booking</Link></li>
                                                <li><Link class="dropdown-item" to="/Menu">Menu</Link></li>

                                            </ul>
                                        </li>


                                        <li class="nav-item">
                                            <Link class="nav-link" to="/Contactus">Contact-us</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link "></Link>
                                        </li>
                                        <Link to="/Bookingtable">
                                            <button type="button" className="btn btn-outline-danger shadow">Book Table</button>
                                        </Link>

                                </ul>

                            </div>
                            <Outlet></Outlet>
                        </nav>
                        </div></Col>
                        
                </Row>
            </Container>
        </div > */}

            <nav className="navbar navbar-expand-lg navbar shadow bg-light" id='navigation'>
                <div class="container-fluid">


                    <Col lg={4} className='brand-logo'>
                        <h1>2<sub className='text-danger'>Yumm</sub></h1>
                    </Col>

                    <button className="navbar-toggler text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                        <Col lg={8}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Aboutus">About Us</Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Service
                                    </Link>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link class="dropdown-item" to="/Bookingtable">Booking</Link></li>
                                        <li><Link class="dropdown-item" to="/Menu">Menu</Link></li>

                                    </ul>
                                </li>


                                <li class="nav-item">
                                    <Link class="nav-link" to="/Contactus">Contact-us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link "></Link>
                                </li>
                                <li class="nav-item">                                
                                <Link to="/Bookingtable">
                                    <button type="button" className="book btn btn-outline-danger shadow">Book Table</button>
                                </Link>
                                </li>


                            </ul>
                        </Col>
                    </div>


                </div>
            </nav>

        </>
    )
}
