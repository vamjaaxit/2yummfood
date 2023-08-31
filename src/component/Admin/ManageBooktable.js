import React from 'react';
import AdminHeader from './Adminheader';
import Adminsidemenu from './Adminside-menu';
import Adminfooter from './Adminfooter';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExportToExcel } from './pages/ExportToExcel';
import { Base_url } from '../../api/const';


export default function ManageBooktable() {
    const [table, settable] = useState([]);
     // EXPORT TO EXAL
  const fileName = "BookTabledata"; // here enter filename for your excel file
  
    const Navigate = useNavigate("");
  
  // add data from api 
    function Addtable() {
      axios.get("BookTable")
        .then((res) => {
          settable(res.data)
        })
    }
  
    useEffect(()=>{
      Addtable();
    }, [])
  
  // delete data from api 
  const DeleteData = (id) =>{
    axios.delete(Base_url+`BookTable/${id}`)
    .then(()=>{
      Swal.fire({
        icon: 'success',
        title: ' Deleted',
        text: ' Delete successfully'
      })
      Addtable();
    })
    
  }
  return (<>
    <AdminHeader/>
    <Adminsidemenu/>
    <div className='managetable p-5'>
    <div className='d-flex justify-content-between'>      
    <h1 className=''>contact-us</h1>
        <ExportToExcel apiData={table} fileName={fileName}
                    />
                    </div>
   <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">Subject</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Number of people</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {table && table.map((row)=>{
            return(

            <tr>
              <th scope="row" key={row.id}>{row.id}</th>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.subject}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.people}</td>
              <td>{row.message}</td>
              <td>
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
