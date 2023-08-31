import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from '../Adminheader'
import Adminsidemenu from '../Adminside-menu'
import Adminfooter from '../Adminfooter'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Base_url } from '../../../api/const';


export default function Updatemenu() {
    const [categorydata, setCategorydata] =useState([]);

    // Add data from api   
    useEffect(() => {
        axios.get(Base_url+"menu")
            .then((res) => {
                setCategorydata(res.data)
            })
    }, [])

    // update data from api 
    const productname = useRef('');
    const productimgurl = useRef('');
    const productdeatail = useRef('');
    const productcategory =useRef('');
    const Navigate = useNavigate('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(Base_url+`menu/${id}`)
            .then((res) => {
                productname.current.value = res.data.productname;
                productimgurl.current.value = res.data.productimgurl;
                productdeatail.current.value = res.data.productdeatail;
                productcategory.current.value = res.data.productcategory;
            })
    }, [])

    const Updatedata = () => {
        var insert = {
            productname: productname.current.value,
            productimgurl: productimgurl.current.value,
            productdeatail: productdeatail.current.value,
            productcategory: productcategory.current.value
        }

        axios.put(Base_url+`menu/${id}`, insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'Updated successfully'
                })
                Navigate('/Managemenu')
            })
    }
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

        <button type='button' onClick={Updatedata} className='border-0 p-2 rounded'>Add Food</button>
      </form>
    </div>

    <Adminfooter />
  </>
  )
}
