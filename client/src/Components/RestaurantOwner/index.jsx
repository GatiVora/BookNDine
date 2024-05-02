// import { useState } from 'react'
// import './atyle.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'
// import Tables from './Tables'
// import Menu from './Menu'
// import Booking from './Bookings'

// function Res() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className="back">
//     <div className='grid-container' >
      
//       {/* <Header OpenSidebar={OpenSidebar}/> */}
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />

      
//       {/* <Tables/>
//       <Menu/>
//       <Booking/> */}
//       </div>
//     </div>

//   )
// }
    
// export default Res
import { useState } from 'react'
import './atyle.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Tables from './Tables'
import Menu from './Menu'
import Booking from './Bookings'
import backgroundImage from '../../assets/bg1.jpg';


function Res() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <div className="back">
    <div className='grid-container'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed', // Ensure the background image is fixed
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      overflowY: 'auto',
    }}
    >
     
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="scrollable-content">
          <Home />
        </div>
      </div>
    </div>
  )
}
   
export default Res
