import { useState } from 'react'
import './atyle.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Tables from './Tables'
import Menu from './Menu'
import Booking from './Bookings'
import backgroundImage from '../../assets/bg1.jpg';

function Menuu() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'  style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed', // Ensure the background image is fixed
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      overflowY: 'auto',
    }}>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Home /> */}
      {/* <Tables/> */}
      <Menu/>
      {/* <Booking/> */}
    </div>
  )
}
    
export default Menuu;