import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Messaggi() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center w-full'>
    <div className="flex h-fit overflow-hidden w-fit">

      <div className="w-1/4 bg-white border-r border-gray-300">

        <div className="overflow-y-auto h-fit p-3 mb-9 ">
          <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" id='firstUser' onClick={ ()=> navigate('/profile/:name/messaggi') }>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold ">Alice</h2>
            </div>
          </div>

          <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" id='secondUser' onClick={ ()=> navigate('Martin') }>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold ">Martin</h2>
            </div>
          </div>

          <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" id='thirdUser' onClick={ ()=> navigate('Charlie') }>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold ">Charlie</h2>
            </div>
          </div>

          

        </div>
      </div>


      <Outlet/>
    </div>
    </div>

  )
}

export default Messaggi