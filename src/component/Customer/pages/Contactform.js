import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../../api/const';

export default function Contactform() {
  const form = useRef("");
  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");
  const Navigate = useNavigate("");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hhzawj3', 'template_6dpmak4', form.current, '0Fpcb8DtKp9mBi2Xc')
  };
    const addcontact = () => {
      const insert = {
        name: name.current.value,
        email: email.current.value,
        subject: subject.current.value,
        message: message.current.value,
      }

      axios.post(Base_url+"contact", insert)
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
      <form className="detailsform " ref={form} onSubmit={sendEmail}>
        <input 
          type="text"
          name="name"
          ref={name}
          placeholder="Name"
          className='p-2 rounded-0' data-aos="fade-up" data-aos-duration="1000"
        /> <br />

        <input
          type="email"
          name="email"
          ref={email}
          placeholder="Email"
          className='mt-3 p-2 rounded-0' data-aos="fade-up" data-aos-duration="1000"
           /> <br />

        <input
          type="text"
          name="subject"
          ref={subject}
          placeholder="Subject"
          className='mt-3 p-2 rounded-0' data-aos="fade-up" data-aos-duration="1000"
           /> <br />


        <textarea
          cols={10} rows={5}
          name='message'
          ref={message}
          placeholder='Message'
          className='mt-3 p-2 w-100' data-aos="fade-up" data-aos-duration="1000"
          >
        </textarea>
        <Button type='submit' onClick={addcontact} className="mt-3 p-3 border border-0 rounded-0 bg-danger w-100" data-aos="fade-up" data-aos-duration="1000">Submit</Button>
      </form>

    )
  }
