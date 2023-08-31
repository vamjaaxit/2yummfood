import React, { useEffect, useState } from 'react';
import AdminHeader from './Adminheader';
import Adminsidemenu from './Adminside-menu';
import Adminfooter from './Adminfooter';
import { ExportToExcel } from './pages/ExportToExcel';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../api/const';

export default function Managecontact() {
  const [data, setdata] = useState([]);
  const Navigate = useNavigate("");
  // EXPORT TO EXAL
  const fileName = "mycontactdata"; // here enter filename for your excel file

  // add data from api 
  function Adddata() {
    axios.get(Base_url + "contact")
      .then((res) => {
        setdata(res.data)
      })
  }

  useEffect(() => {
    Adddata();
  }, [])

  // delete data from api 
  const DeleteData = (id) => {
    axios.delete(Base_url + `contact/${id}`)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: ' Deleted',
          text: ' Delete successfully'
        })
        Adddata();
        Navigate('/')
      })
  }
  return (
    <>
      <AdminHeader />
      <Adminsidemenu />
      <div className='managetable p-5'>
        <div className='d-flex justify-content-between'>
          <h1 className=''>contact-us</h1>
          <ExportToExcel apiData={data} fileName={fileName}
          />
        </div>

        <table class="table table-striped">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">subject</th>
              <th scope="col">message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((row) => {
              return (

                <tr>
                  <th scope="row" key={row.id}>{row.id}</th>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.subject}</td>
                  <td>{row.message}</td>
                  <td>
                    <button type='button' onClick={() => DeleteData(row.id)} className='border-0 bg-danger rounded p-2 ms-2 text-light'><i className='bi bi-trash'></i></button>
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
