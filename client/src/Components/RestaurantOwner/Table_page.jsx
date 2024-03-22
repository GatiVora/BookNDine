import { useState } from 'react'
import './atyle.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Tables from './Tables'
import Menu from './Menu'
import Booking from './Bookings'

function Tab() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Home /> */}
      <Tables/>
      {/* <Menu/> */}
      {/* <Booking/> */}
    </div>
  )
}
    
export default Tab