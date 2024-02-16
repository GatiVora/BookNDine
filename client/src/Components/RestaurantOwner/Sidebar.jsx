import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'


import { useAuth2 } from '../ResAuth';
// import logo from "../../../assets/logo.png";
import logo from "../../assets/logo.png";

function Sidebar({openSidebarToggle, OpenSidebar}) {

    
    const auth = useAuth2();

    const handleLogout = () => {
        auth.logOut(); // Call the logout function
      };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className="logo">
            <span className='icon close_icon' onClick={OpenSidebar}>
                <img src={logo} alt="app logo" />
                </span>
            </div>
            
        </div>
        

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
             <li className='sidebar-list-item'>
             <a  className="" onClick={handleLogout}>
                    Logout
                </a>
            </li>
            {/*
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar