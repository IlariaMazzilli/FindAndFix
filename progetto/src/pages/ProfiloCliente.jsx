import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SidebarCliente from '../components/SidebarCliente'
import { Outlet } from 'react-router-dom'

function ProfiloCliente({children}) {
  return (
    <div>
      <Navbar/>
      <br /><br /><br /><br /><br /><br />
      <div className='flex h-fit w-full'>
        <SidebarCliente/>
        <Outlet/>
      </div>
      
      <br /><br /><br /><br />
      <Footer/>
    </div>
  )
}

export default ProfiloCliente