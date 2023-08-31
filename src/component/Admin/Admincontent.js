import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Base_url } from '../../api/const';


export default function Admincontent() {
 


  const [contacts, setcontacts] = useState([]);

  useEffect(()=>{
axios.get(Base_url+"contact")
.then((res)=>{setcontacts(res.data)})
  }, [])


  const [table, settable] = useState([]);

  useEffect(()=>{
axios.get(Base_url+"BookTable")
.then((res)=>{settable(res.data)})
  }, [])
  return (
    <>
      <div className='Admin-content p-5 ' >
        <div className='d-flex justify-content-around '>
          <div className='text-center p-3 shadow'>
            <h2>{contacts.length}</h2>
            <h1>Our Contacts</h1>
          </div>
          <div className='text-center shadow p-4'>
            <h2>{table.length}</h2>
            <h1>Book Table</h1>
          </div>
        </div>
        {/* <div id="piechart_3d" style={{marginTop:"15%",width:"900px",height:"500px",marginleft:"45%"}}> </div> */}

      </div>
      
     
    </>
  )
}
