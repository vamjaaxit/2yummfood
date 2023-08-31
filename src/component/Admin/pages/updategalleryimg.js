import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Base_url } from '../../../api/const';


export default function UpdateGalleryimage() {
    const [adddata, setGalleryadddata] = useState([]);

    // Add data from api   
    useEffect(() => {
        axios.get(Base_url+"gallery")
            .then((res) => {
                setGalleryadddata(res.data)
            })
    }, [])

    // update data from api 
    const Galleryimgtitle = useRef('');
    const Galleryimgurl = useRef('');
    const Navigate = useNavigate('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(Base_url+`gallery/${id}`)
            .then((res) => {
                Galleryimgtitle.current.value = res.data.Galleryimgtitle;
                Galleryimgurl.current.value = res.data.Galleryimgurl;
            })
    }, [])

    const Updatedata = () => {
        var insert = {
            Galleryimgtitle: Galleryimgtitle.current.value,
            Galleryimgurl: Galleryimgurl.current.value
        }

        axios.put(Base_url+`gallery/${id}`, insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'Updated successfully'
                })
                Navigate('/Managegallery')
            })
    }
    return (
        <>
            <AdminHeader />
            <Adminsidemenu />
            <div className='managetable p-5'>
                <h2 className='text-center'>Add Gallery Images Here</h2>
                <form className='mt-4 w-75 mx-auto border p-4 rounded'>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Gallery Image Title</label>
                        <input type="text" ref={Galleryimgtitle} className="form-control" id="exampleFormControlInput1" placeholder="Image Gallery title here**" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Gallery Image URL</label>
                        <input type="url" ref={Galleryimgurl} 
                        
                        className="form-control" id="exampleFormControlInput1" placeholder="Image Gallery URL here**" />
                    </div>
                    <button type='button' onClick={Updatedata} className='border-0 p-2 rounded'>Add Image</button>
                </form>
            </div>
            <Adminfooter />
        </>
    )
}
