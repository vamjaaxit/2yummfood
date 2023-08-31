import React, { useEffect, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Base_url } from '../../../api/const';

import { useNavigate } from 'react-router-dom';
// import { ExportToExcel } from './ExportToExcel';
// import { ExportToExcel } from './ExportToExcel';

export default function Manageimage() {

  const [img, setImg] = useState([]);
  const Navigate = useNavigate("");
  // const fileName = "myfile";
  

// add data from api 
  function AddImg() {
    axios.get(Base_url+"image")
      .then((res) => {
        setImg(res.data)
      })
  }

  useEffect(()=>{
    AddImg();
  }, [])

// delete data from api 
const DeleteData = (id) =>{
  axios.delete(Base_url+`image/${id}`)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      title: 'Image Deleted',
      text: 'Image Delete successfully'
    })
    AddImg();
  })
}
  return (
    <>
      <AdminHeader />
      <Adminsidemenu />
      <div className='managetable p-5'>
        <h1 className='text-center'>Manage Image Here</h1>
        
        
           
          
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image Title</th>
              <th scope="col">Image URL</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {img && img.map((row)=>{
            return(

            <tr>
              <th scope="row" key={row.id}>{row.id}</th>
              <td>{row.imgtitle}</td>
              <td>{row.imgurl}</td>
              <td>
                <button type='button' onClick={()=> Navigate(`/updateimage/${row.id}`)} className='border-0 bg-primary rounded p-2 text-light'><i className='bi bi-pencil'></i></button>
                <button type='button' onClick={()=> DeleteData(row.id)} className='border-0 bg-danger rounded p-2 ms-2 text-light'><i className='bi bi-trash'></i></button>
              </td>
            </tr>

            )
          })}

          </tbody>
        </table>
      
      </div>
         
      <Adminfooter />
    </>
  )
}
