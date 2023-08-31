import React ,{useState,useEffect}from 'react';
import AdminHeader from '../Adminheader';
import Adminsidemenu from '../Adminside-menu';
import Adminfooter from '../Adminfooter';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../../api/const';


export default function Managegallery() {
  const [Galleryimg, setGalleryimg] = useState([]);
  const Navigate = useNavigate("");

// add data from api 
  function GalleryAddImg() {
    axios.get(Base_url+"gallery")
      .then((res) => {
        setGalleryimg(res.data)
      })
  }

  useEffect(()=>{
    GalleryAddImg();
  }, [])

// delete data from api 
const DeleteData = (id) =>{
  axios.delete(Base_url+`gallery/${id}`)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      title: 'Gallery Image Deleted',
      text: 'Gallery Image Delete successfully'
    })
    GalleryAddImg();
  })
}

  return (
    <>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
        <h1 className='text-center'>Manage Gallery Image Here</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Gallery Image Title</th>
              <th scope="col">Gallery Image URL</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {Galleryimg && Galleryimg.map((row)=>{
            return(

            <tr>
              <th scope="row" key={row.id}>{row.id}</th>
              <td>{row.Galleryimgtitle}</td>
              <td className='' style={{width:"50px"}}>{row.Galleryimgurl}</td>
              <td>
                <button type='button' onClick={()=> Navigate(`/UpdateGalleryimage/${row.id}`)} className='border-0 bg-primary rounded p-2 text-light'><i className='bi bi-pencil'></i></button>
                <button type='button' onClick={()=> DeleteData(row.id)} className='border-0 bg-danger rounded p-2 ms-2 text-light'><i className='bi bi-trash'></i></button>
              </td>
            </tr>

            )
          })}

          </tbody>
        </table>
      </div>
     
    <Adminfooter/>
    </>
  )
}
