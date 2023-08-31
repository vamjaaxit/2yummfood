import React from 'react';
import { Row ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from './Footer';
import Contactform from './Contactform';
import Aos from 'aos';
import PostertopApp from './postertop';
import { Base_url } from '../../../api/const';
export default function Contact() {
    
  return (
    <>
        <Header/>
        <PostertopApp name="Contact Us"/>
        <div className="container p-5">
                <Row >
                    <Col  sm={12} md lg={12} className="text-center  position-relative" data-aos="fade-up" data-aos-duration="1000">
                        <h4 className="text-danger"  id='twoline'>Contact For Any Query</h4>
                    </Col>
                    <Col sm={12} md lg={3} className="information shadow-sm mx-auto text-center p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-5 "data-aos="fade-up" data-aos-duration="1000">
                        <h5>Booking</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to="#" className='text-decoration-none'> Toyummbooking@gmail.com</Link>
                    </Col>
                    <Col sm={12} md lg={3} className="information shadow-sm text-center mx-auto p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-5"data-aos="fade-up" data-aos-duration="1000">
                        <h5>General</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to='#' className=' text-decoration-none'>Toyummgeneral@gmail.com</Link>
                    </Col>
                    <Col sm={12} md lg={3} className="information shadow-sm text-center mx-auto p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-sm-4 mt-5"data-aos="fade-up" data-aos-duration="1000">
                        <h5>Technical</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to='#' className=' p-sm-0 text-decoration-none'> Toyummtechanical@gmail.com</Link>
                        </Col>
                    </Row>
                </div>

                <div className='map container-fuild'>
                    <Col sm={12} md lg={12} className="text-center  position-relative"data-aos="fade-up" data-aos-duration="1000">
                        <h4 className="text-danger" id='twoline'>Keep in touch</h4>
                    </Col>
                    <Row className="p-5 pt-3">
                        <Col className=" mx-auto" data-aos="fade-up" data-aos-duration="1000" sm={10} md={5} lg={5} >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14685.865745544928!2d72.4819042!3d23.0433552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6318e8da91%3A0x864bb42461cc953f!2sTaj%20Skyline%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1685164697975!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0px" }} referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col className=" mx-auto" sm={10} md={5} lg={5}>
                        <Contactform/>
 
                        </Col>
                    </Row>
                </div>

    <Footer/>
    </>
  )
}
