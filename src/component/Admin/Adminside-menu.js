import React from 'react';
import { Link } from 'react-router-dom';

export default function Adminsidemenu() {
  return (
    <>
        <div className='side-menu shadow'>
       
                        <li class="nav-item dropdown ms-5 mt-4">
                            
                            <Link class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                image
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/Addimage">Add Image</Link></li>
                                <li><Link class="dropdown-item" to="/ManageImage">Manage Image</Link></li>
                            </ul>
                          
                        </li>
                        <li class="nav-item dropdown ms-5 mt-4">
                            
                            <Link class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/Addmenu">Add Menu</Link></li>
                                <li><Link class="dropdown-item" to="/Managemenu">Manage Menu</Link></li>
                            </ul>
                          
                        </li>

                        <li class="nav-item dropdown ms-5 mt-4">
                            
                            <Link class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                gallery
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/Addgallery">Add Gallery</Link></li>
                                <li><Link class="dropdown-item" to="/Managegallery">Manage Gallery</Link></li>
                            </ul>
                          
                        </li>
                        <li class="nav-item dropdown ms-5 mt-4">
                            
                            <Link class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                our team
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/Addteammaster">Add Team Master</Link></li>
                                <li><Link class="dropdown-item" to="/Manageteammaster">Manage Team Master</Link></li>
                            </ul>
                        <li><Link class="dropdown-item mt-4" to="/Managecontact">Manage contact</Link></li>
                        <li><Link class="dropdown-item mt-4" to="/ManageBooktable">Manage Book Table</Link></li>
                          
                        </li>

        </div>
    </>
  )
}
