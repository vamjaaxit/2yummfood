import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';

export default function Footer() {
  return (
    <>
         <div className="container-fuild"  id="footer">
                <Row className="text-white m-0 p-0 pt-4 pb-3">
                    <Col  sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0" >
                        <h3>Usefull Link</h3>
                        <Link to="/home" className="text-decoration-none text-white"><i className="bi bi-arrow-right"></i> Home</Link> <br />
                        <Link to="/Aboutus" className=" text-decoration-none text-white"><i className="bi bi-arrow-right"></i> About</Link> <br />
                        <Link to="/Menu" className=" text-decoration-none text-white"><i className="bi bi-arrow-right"></i> Menu</Link> <br />
                        <Link to="/Contactus" className=" text-decoration-none text-white"><i className="bi bi-arrow-right"></i> Contact</Link> <br />
                        <Link to="/BookingTable" className=" text-decoration-none text-white"><i className="bi bi-arrow-right"></i> Book Table</Link>
                    </Col>
                    <Col  sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
                        <h3>Contact us</h3>
                        <p><i className="bi bi-geo-alt"></i> 123 street , Ahamdabad, India</p>
                        <p><i className="bi bi-phone"></i> +91 9576233977</p>
                        <p><i className="bi bi-envelope"></i> 2yumm@gmail.com</p>
                        <p className="social-mediya">
                            
                            
                            <b><i className="bi bi-twitter"></i></b>
                            <b><i className="bi bi-youtube"></i></b>
                            <b><i className="bi bi-facebook"></i></b>
                            <b><i className="bi bi-instagram"></i></b>
                        </p>
                    </Col>
                    <Col  sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
                        <h3>Opening</h3>
                        <h5>Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5>Sunday</h5>
                        <p>10AM - 08PM</p>
                    </Col>
                </Row>
                <Col sm={12} md lg={12} className="copyright text-center text-white-50 p-2">
                    &copy; Copyright by 2yumm 2023 || All rights are reserved
                </Col>
            </div>
       
    </>
  )
}
