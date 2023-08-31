import React ,{useRef}from 'react';
import { Row , Col} from 'react-bootstrap';
import Header from '../Header';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PostertopApp from './postertop';
import { Base_url } from '../../../api/const';


export default function Bookingtable() {
    const name = useRef("");
    const email = useRef("");
    const subject = useRef("");
    const date = useRef("");
    const time = useRef("");
    const people = useRef("");
    const message = useRef("");
    const Navigate = useNavigate("");
  
  
      const addtable = () => {
        const insert = {
          name: name.current.value,
          email: email.current.value,
          subject: subject.current.value,
          date: date.current.value,
          time: time.current.value,
          people: people.current.value,
          message: message.current.value,
        }
  
        axios.post(Base_url+"BookTable", insert)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Added Data',
              text: 'add Data successfully'
            })
            Navigate('/')
          }, [])
          
      }
  return (
    <>
    <Header/>
    <PostertopApp name="Book Table"/>
    <div className='container mb-4'  id='booktable' >
            <Col className='position-relative'>
                <h4 className='mt-5 text-danger' id='oneline'>Reservation</h4>
            </Col>
                <h1 className='mt-3'>Book Table</h1>
                <form >
                <Row className='mt-4'>
                    <Col  sm={12} md={4} lg={4} className='mx-auto'>
                        <input
                            type="text"
                            name="name"
                            ref={name}
                            maxLength="10"  
                            placeholder="name"
         
                            required
                            className='rounded-0 p-2 w-100' />
                    </Col>
                    <Col sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-0'>
                        <input
                            type="text"
                            name="email"
                            ref={email}
                            placeholder="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title='Enter valid email address'
                            required
                            className='rounded-0 p-2 w-100' />
                    </Col>
                    <Col  sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-0'>
                        <input
                            type="subject"
                            name="subject"
                            ref={subject}
                            placeholder="subject"
                        
                            required
                            className='rounded-0 p-2 w-100'/>
                    </Col>
                    <Col  sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='date' 
                            name='date' 
                            ref={date}
                            placeholder='Date' 
                            required
                            className='rounded-0 p-2 w-100' />
                    </Col>
                    <Col sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='time' 
                            name='time' 
                            ref={time}
                            placeholder='Time' 
                            required 
                            className='rounded-0 p-2 w-100' />
                    </Col>
                    <Col sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='number' 
                            name='people' 
                            ref={people}
                            placeholder='Number of People' 
                            required 
                            className='rounded-0 p-2 w-100' />
                    </Col>
                    <Col sm={12} md={12} lg={12} className='mx-auto mt-3 mt-md-4'>
                        <textarea rows={6} 
                        ref={message}
                            placeholder='Message' 
                            name='name'  
                            className='p-2 w-100' />
                    </Col>
                    <Col size={12} className=' mt-3 mt-md-4' align="center">
                        <button type='button' className=' bg-danger rounded-pill border border-0' onClick={addtable}>Book Table</button>
                    </Col>
                </Row>
                </form>
            </div>

    <Footer/>
    </>
  )
}

