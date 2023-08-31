import React from 'react';
import { Col } from 'react-bootstrap';

function PostertopApp(props) {
  return (
    <>
        <div className="Container-fuild p-5 text-center"  id="pagename">
            <Col >
                <h1 className="text-white" data-aos="fade-down" data-aos-duration="1000">{props.name}</h1>
            </Col>
        </div>
    </>
  )
}

export default PostertopApp;
