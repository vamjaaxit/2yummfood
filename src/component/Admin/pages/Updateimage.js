import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Base_url } from '../../../api/const';


export default function Updateimage() {
    const [adddata, setadddata] = useState([]);

    // Add data from api   
    useEffect(() => {
        axios.get(Base_url+"image")
            .then((res) => {
                setadddata(res.data)
            })
    }, [])

    // update data from api 
    const imgtitle = useRef('');
    const imgurl = useRef('');
    const Navigate = useNavigate('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(Base_url+`image/${id}`)
            .then((res) => {
                imgtitle.current.value = res.data.imgtitle;
                imgurl.current.value = res.data.imgurl;
            })
    }, [])

    const Updatedata = () => {
        var insert = {
            imgtitle: imgtitle.current.value,
            imgurl: imgurl.current.value
        }

        axios.put(Base_url+`image/${id}`, insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'Updated successfully'
                })
                Navigate('/Manageimage')
            })
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
                        <input type="text" ref={imgtitle} className="form-control" id="exampleFormControlInput1" placeholder="Image title here**" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Image URL</label>
                        <input type="email" ref={imgurl} className="form-control" id="exampleFormControlInput1" placeholder="Image URL here**" />
                    </div>
                    <button type='button' onClick={Updatedata} className='border-0 p-2 rounded'>Add Image</button>
                </form>
            </div>
            <Adminfooter />
        </>
    )
}
