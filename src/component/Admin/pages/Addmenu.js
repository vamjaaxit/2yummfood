import React, { useEffect, useState } from 'react';
import AdminHeader from '../Adminheader';
import Adminsidemenu from '../Adminside-menu';
import Adminfooter from '../Adminfooter';
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Base_url } from '../../../api/const';



export default function Addmenu() {
  const productname = useRef("");
  const productdeatail = useRef("");
  const productimgurl = useRef("");
  const productcategory = useRef("");
  const Navigate = useNavigate("");

  const addimage = () => {

    const insert = {
      productcategory: productcategory.current.value,
      productname: productname.current.value,
      productdeatail: productdeatail.current.value,
      productimgurl: productimgurl.current.value,
    }

    axios.post(Base_url+"menu", insert)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Added Food',
          text: 'Added Food successfully'
        })
        Navigate('/Mangemenu')
      }, [])
  }

  const [categorydata, setCategorydata] = useState([])
  useEffect(() => {
    axios.get(Base_url+'catagery')
      .then((res) => {
        setCategorydata(res.data)
      })
  }, [])

  return (
    <>
      <AdminHeader />
      <Adminsidemenu />
      <div className='managetable p-5'>
        <h2 className='text-center'>Add Menu Here</h2>
        <form className='mt-4 w-75 mx-auto border p-4 rounded'>
          <div>
            <select title='category' ref={productcategory}>
              <option value='category'> - Category - </option>
              {categorydata && categorydata.map((item) => {
                return (
                  <option value={item.category}>{item.category}</option>
                )
              })}
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">product Name</label>
            <input type="email" ref={productname} className="form-control" id="exampleFormControlInput1" placeholder="product Name**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Product Image URL</label>
            <input type="url" ref={productimgurl} className="form-control" id="exampleFormControlInput1" placeholder="Product Image URL**" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Product detail</label>
            <input type="url" ref={productdeatail} className="form-control" id="exampleFormControlInput1" placeholder="Product detail**" />
          </div>

          <button type='button' onClick={addimage} className='border-0 p-2 rounded'>Add Food</button>
        </form>
      </div>

      <Adminfooter />
    </>
  )
}
