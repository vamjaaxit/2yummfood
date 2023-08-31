import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Base_url } from '../../../api/const';


export default function Updateourteam() {
    const [addourteam, setAddourteam] =useState([]);

    // Add data from api   
    useEffect(() => {
        axios.get(Base_url+"ourteammaster")
            .then((res) => {
                setAddourteam(res.data)
            })
    }, [])

    // update data from api 
    const teammastername = useRef('');
    const teammasterimgurl = useRef('');
    const teammasterdetail = useRef('');
    const Navigate = useNavigate('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(Base_url+`ourteammaster/${id}`)
            .then((res) => {
                teammastername.current.value = res.data.teammastername;
                teammasterimgurl.current.value = res.data.teammasterimgurl;
                teammasterdetail.current.value = res.data.teammasterdetail;
            })
    }, [])

    const Updatedata = () => {
        var insert = {
            teammastername: teammastername.current.value,
            teammasterimgurl: teammasterimgurl.current.value,
            teammasterdetail: teammasterdetail.current.value
        }

        axios.put(Base_url+`ourteammaster/${id}`, insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'Updated successfully'
                })
                Navigate('/Manageteammaster')
            })
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
          <button type='button' onClick={Updatedata} className='border-0 p-2 rounded'>Add Team Master</button>
        </form>
      </div>
   
    <Adminfooter/>
    </>
  )
}
