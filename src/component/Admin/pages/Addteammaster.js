import React from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Base_url } from '../../../api/const';


export default function Addteammaster() {
    const teammastername = useRef("");
    const teammasterimgurl = useRef("");
    const teammasterdetail = useRef("");
    const Navigate = useNavigate("");
  
    const addteammaster = () => {
  
      const insert = {
        teammastername: teammastername.current.value,
        teammasterimgurl: teammasterimgurl.current.value,
        teammasterdetail: teammasterdetail.current.value,
      }
  
      axios.post(Base_url+"ourteammaster", insert)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Added Team Master',
            text: 'Add Team Master successfully'
          })
          Navigate('/Manageteammaster')
        }, [])
    }
  
  return (
    <>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
        <h2 className='text-center'>Add our Team Master</h2>
        <form className='mt-4 w-75 mx-auto border p-4 rounded'>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Team Master Name</label>
            <input type="email" ref={teammastername} className="form-control" id="exampleFormControlInput1" placeholder="Team Master Name**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Team Master Image URL</label>
            <input type="url" ref={teammasterimgurl} className="form-control" id="exampleFormControlInput1" placeholder="Team Master Image URL**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Team Master Detail</label>
            <input type="text" ref={teammasterdetail} className="form-control" id="exampleFormControlInput1" placeholder="Team Master Detail**" />
          </div>
          <button type='button' onClick={addteammaster} className='border-0 p-2 rounded'>Add Team Master</button>
        </form>
      </div>
   
    <Adminfooter/>
    </>
  )
}
