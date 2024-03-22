import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { BsGrid1X2Fill } from 'react-icons/bs';
import { useAuth2 } from '../ResAuth';
import logo from "../../assets/logo.png";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const auth = useAuth2();

    const handleLogout = () => {
        auth.logOut(); // Call the logout function
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className="logo">
                    <span className='icon close_icon' onClick={OpenSidebar}>
                        <img src={logo} alt="app logo" />
                    </span>
                </div>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/reshome"> {/* Use Link instead of <a> */}
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/tab"> {/* Use Link instead of <a> */}
                        <BsGrid1X2Fill className='icon' /> Tables
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/menu"> {/* Use Link instead of <a> */}
                        <BsGrid1X2Fill className='icon' /> Menu
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/bookings"> {/* Use Link instead of <a> */}
                        <BsGrid1X2Fill className='icon' /> Booking
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a className="" onClick={handleLogout}> {/* Logout action */}
                        Logout
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
