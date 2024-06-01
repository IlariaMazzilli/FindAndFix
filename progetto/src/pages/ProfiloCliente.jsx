import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SidebarCliente from '../components/SidebarCliente'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../components/AxiosInstance'

function ProfiloCliente({children}) {
  const [userData, setUserData] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axiosInstance.get('/profile/cliente')
                setUserData(res.data)
                console.log(res)
            } catch (error) {
                console.log('Errore durante il fetch')
            }
        }
        fetchUserData()
    }

        , [])
  return (
    <div>
      <Navbar/>
      <br /><br /><br />
      <div className='flex h-fit w-full'>
        <SidebarCliente/>
        <Outlet  />
      </div>
      <br />
      <Footer/>
    </div>
  )
}

export default ProfiloCliente