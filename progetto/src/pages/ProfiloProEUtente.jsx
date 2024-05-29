import React from 'react'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function ProfiloProEUtente({children}) {
  return (
    <div>
      <Navbar/>
      <br /><br /><br /><br /><br /><br />
      <div className='flex h-fit w-full'>
        <Sidebar/>
        <Outlet/>
      </div>
      
      <br /><br /><br /><br />
      <Footer/>
    </div>
  )
}

export default ProfiloProEUtente