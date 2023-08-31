import React, { useEffect, useState } from 'react'
import AdminHeader from '../Adminheader';
import Adminsidemenu from '../Adminside-menu';
import Adminfooter from '../Adminfooter';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../../api/const';


export default function Manageteammaster() {
  const [teammaster, setteammaster] = useState([]);
  const Navigate = useNavigate("");

// add data from api 
  function Addteammaster() {
    axios.get( Base_url+"ourteammaster")
      .then((res) => {
        setteammaster(res.data)
      })
  }

  useEffect(()=>{
    Addteammaster();
  }, [])

// delete data from api 
const DeleteData = (id) =>{
  axios.delete( Base_url+`ourteammaster/${id}`)
  .then(()=>{
    Swal.fire({
      icon: 'success',
      title: 'Team Master Deleted',
      text: 'Team Master Delete successfully'
    })
    Addteammaster();
  })
}
  return (
    <>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
        <h1 className='text-center'>Manage Our Team Master Here</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Master Name</th>
              <th scope="col">Team Master Image URL</th>
              <th scope="col">Team Master Deatil</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {teammaster && teammaster.map((row)=>{
            return(

            <tr>
              <th scope="row" key={row.id}>{row.id}</th>
              <td>{row.teammastername}</td>
              <td className='' style={{width:"50px"}}>{row.teammasterimgurl}</td>
              <td>{row.teammasterdetail}</td>
              <td>
                <button type='button' onClick={()=> Navigate(`/Updateourteam/${row.id}`)} className='border-0 bg-primary rounded p-2 text-light'><i className='bi bi-pencil'></i></button>
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
