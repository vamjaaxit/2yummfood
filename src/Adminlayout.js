import React from 'react';
import AdminHeader from './component/Admin/Adminheader';
import Adminsidemenu from './component/Admin/Adminside-menu';
import Admincontent from './component/Admin/Admincontent';
import Adminfooter from './component/Admin/Adminfooter';

export default function Adminlayout() {
  return (
    <>
        <AdminHeader/>
        <Adminsidemenu/>
        <Admincontent/>
        <Adminfooter/>
    
    </>
  )
}
