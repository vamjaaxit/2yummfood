import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from './component/Admin/Adminheader';
import Adminsidemenu from './component/Admin/Adminside-menu';
import Adminfooter from './component/Admin/Adminfooter';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Updateteammaster() {
    const [teammaster, setteammaster] = useState([]);

    // Add data from api   
    useEffect(() => {
        axios.get("http://localhost:4000/ourteammaster")
            .then((res) => {
                setteammaster (res.data)
            })
    }, [])

    // update data from api 
    const teammastername = useRef('');
    const teammasterimgurl = useRef('');
    const teammasterdetail = useRef('');
    const Navigate = useNavigate('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/ourteammaster/${id}`)
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

        axios.put(`http://localhost:4000/ourteammaster/${id}`, insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'Updated successfully'
                })
                Navigate('/Manageteammaster')
            })}
  return (
    <>
    <AdminHeader />
    <Adminsidemenu />
    <div className='managetable p-5'>
        <h2 className='text-center'>Add Images Here</h2>
        <form className='mt-4 w-75 mx-auto border p-4 rounded'>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Image Title</label>
                <input type="text" ref={teammastername} className="form-control" id="exampleFormControlInput1" placeholder="Image title here**" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Image11212 URL</label>
                <input type="email" ref={teammasterimgurl} className="form-control" id="exampleFormControlInput1" placeholder="Image URL here**" />
            </div>
            <button type='button' onClick={Updatedata} className='border-0 p-2 rounded'>Add Image</button>
        </form>
    </div>
    <Adminfooter />
</>
  )
}



