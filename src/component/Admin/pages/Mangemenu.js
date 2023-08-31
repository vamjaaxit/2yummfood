import React, { useEffect, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../../api/const';


export default function Mangemenu() {
  const [menu, setmenu] = useState([]);
  const Navigate = useNavigate("");

// add data from api 
  function Addmenu() {
    axios.get( Base_url+"menu")
      .then((res) => {
        setmenu(res.data)
      })
  }

  useEffect(()=>{
    Addmenu();
  }, [])

// delete data from api 
const DeleteData = (id) =>{
  axios.delete( Base_url+`menu/${id}`)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      title: 'Image Deleted',
      text: 'Image Delete successfully'
    })
    Addmenu();
  })
}
  return (
    <>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
        <h1 className='text-center'>Manage Menu Here</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">product Name</th>
              <th scope="col">product Image URL</th>
              <th scope="col">product Category</th>
              <th scope="col">product Detail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {menu && menu.map((row)=>{
            return(

            <tr>
              <th scope="row" key={row.id}>{row.id}</th>
              <td className='' style={{width:"20px"}}>{row.productname}</td>
              <td className='' style={{width:"20px"}}>{row.productimgurl} </td>
              <td className='' style={{width:"20px"}}>{row.productcategory}</td>
              <td className='' style={{width:"20px"}}>{row.productdeatail}</td>
              <td>
              <div className='action'>
                             <button type='button' onClick={()=> Navigate(`/Updatemenu/${row.id}`)} className='border-0 bg-primary rounded p-2 text-light'><i className='bi bi-pencil'></i></button>
                
                <button type='button' onClick={()=> DeleteData(row.id)} className='border-0 bg-danger rounded p-2 ms-2 text-light'><i className='bi bi-trash'></i></button>
                </div>
 
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
