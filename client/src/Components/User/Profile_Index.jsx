import { useState } from 'react'
import './atyle.css'
import Header_Profile from './Header'
import Sidebar from './User_Sidebar'
import Dashboard from './Dashboard'
import Profile from './Profile'

function Profile_Index() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header_Profile OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
      {/* <Tables/>
      <Menu/>
      <Booking/> */}
      {/* <Profile/> */}
      
    </div>
  )
}
    
export default Profile_Index;