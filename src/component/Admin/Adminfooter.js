import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';

export default function Adminfooter() {
  return (
    <>
         <div className="container-fuild clearfix" style={{height:"100px"}}>
             
                <Col sm={12} md lg={12} className="copyright text-center text-white-50 p-2">
                    &copy; Copyright by 2yumm 2023 || All rights are reserved
                </Col>
            </div>
       
    </>
  )
}
