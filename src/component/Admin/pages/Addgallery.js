import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminHeader from '../Adminheader';
import Adminsidemenu from '../Adminside-menu';
import Adminfooter from '../Adminfooter';
import { Base_url } from '../../../api/const';

export default function Addgallery() {
  const Galleryimgtitle = useRef("");
  const Galleryimgurl = useRef("");
  const Navigate = useNavigate("");
  

  const Galleryaddimage = () => {

    const insert = {
      Galleryimgtitle: Galleryimgtitle.current.value,
      Galleryimgurl: Galleryimgurl.current.value,
    }
axios.post(Base_url+"gallery", insert)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Gallery Image Added',
          text: 'Gallery Image add successfully'
        })
        Navigate('/Managegallery')
      }, [])
  }

  return (
    <>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
        <h2 className='text-center'>Add Gallery Images Here</h2>
        <form className='mt-4 w-75 mx-auto border p-4 rounded'>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Gallery Image Title</label>
            <input type="email" ref={Galleryimgtitle} className="form-control" id="exampleFormControlInput1" placeholder="Image title here**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Gallery Image URL</label>
            <input type="url" ref={Galleryimgurl} className="form-control" id="exampleFormControlInput1" placeholder="Image URL here**" />
          </div>
          <button type='button' onClick={Galleryaddimage} className='border-0 p-2 rounded'>Add Gallery Image</button>
        </form>
      </div>
     
    <Adminfooter/>
    </>
  )
}
