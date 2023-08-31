import React from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Base_url } from '../../../api/const';


export default function Addimage() {

  const imgtitle = useRef("");
  const imgurl = useRef("");
  const Navigate = useNavigate("");

  const addimage = () => {

    const insert = {
      imgtitle: imgtitle.current.value,
      imgurl: imgurl.current.value,
    }

    axios.post(Base_url+"image", insert)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Image Added',
          text: 'Image add successfully'
        })
        Navigate('/Manageimage')
      }, [])
  }

  return (
    <>
      <AdminHeader />
      <Adminsidemenu />
      <div className='managetable p-5'>
        <h2 className='text-center'>Add Images Here</h2>
        <form className='mt-4 w-75 mx-auto border p-4 rounded'>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Image Title</label>
            <input type="email" ref={imgtitle} className="form-control" id="exampleFormControlInput1" placeholder="Image title here**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Image URL</label>
            <input type="url" ref={imgurl} className="form-control" id="exampleFormControlInput1" placeholder="Image URL here**" />
          </div>
          <button type='button' onClick={addimage} className='border-0 p-2 rounded'>Add Image</button>
        </form>
      </div>
      <Adminfooter />
    </>
  )
}
