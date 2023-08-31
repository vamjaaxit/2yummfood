import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Customer/Home';
import Aboutus from './component/Customer/pages/About-us';
import Contact from './component/Customer/pages/Contact';
import Menu from './component/Customer/pages/Menu';
import Bookingtable from './component/Customer/pages/Bookingtable';

// Admin paneel

import Login from './component/Admin/Login';
import Adminlayout from './Adminlayout';
import Addteammaster from './component/Admin/pages/Addteammaster';
import Manageteammaster from './component/Admin/pages/Manageteammaster';
import Updateteammaster from './Updateteammaster';
import Addimage from './component/Admin/pages/Addimage';
import Manageimage from './component/Admin/pages/Manageimage';
import Addmenu from './component/Admin/pages/Addmenu';
import Mangemenu from './component/Admin/pages/Mangemenu';
import Addgallery from './component/Admin/pages/Addgallery';
import Managegallery from './component/Admin/pages/Managegallery';
import Updateimage from './component/Admin/pages/Updateimage';
import UpdateGalleryimage from './component/Admin/pages/updategalleryimg';
import Managecontact from './component/Admin/Managecontact';
import ManageBooktable from './component/Admin/ManageBooktable';
import Updatemenu from './component/Admin/pages/Updatemenu';
import Updateourteam from './component/Admin/pages/Updateourteam';
import Aos from 'aos';

function App() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Aboutus' element={<Aboutus />} />
                    <Route path="/Bookingtable" element={<Bookingtable />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path='/Contactus' element={<Contact />} />

                    {/* <Route path="*" element={<PagenotfoundApp />} /> */}



                    {/* admin pannel */}

                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Login/Admin-dashboard" element={<Adminlayout />}></Route>

                    <Route path="/Addimage" element={<Addimage />}></Route>
                    <Route path="/Manageimage" element={<Manageimage />}></Route>
                    <Route path="/updateimage/:id" element={<Updateimage />}></Route>
                    <Route path="/Addmenu" element={<Addmenu />}></Route>
                    <Route path="/Managemenu" element={<Mangemenu />}></Route>
                    <Route path="/Addgallery" element={<Addgallery />}></Route>
                    <Route path="/Managegallery" element={<Managegallery />}></Route>
                    <Route path="/UpdateGalleryimage/:id" element={<UpdateGalleryimage />}></Route>
                    <Route path="/Managecontact" element={<Managecontact />}></Route>
                    <Route path="/ManageBooktable" element={<ManageBooktable />}></Route>
                    <Route path="/Addteammaster" element={<Addteammaster />}></Route>
                    <Route path="/Manageteammaster" element={<Manageteammaster />}></Route>
                    <Route path="/Updateteammaster" element={<Updateteammaster />}></Route>
                    <Route path="/Updatemenu/:id" element={<Updatemenu />}></Route>
                    <Route path="/Updateourteam/:id" element={<Updateourteam />}></Route>



                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App