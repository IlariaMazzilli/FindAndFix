import React from 'react'
import ProProfileUpper from '../components/ProProfileUpper'
import Navbar from '../components/Navbar'
import profile1pro from '../images/profile1pro.jpg'


function ProfilePro() {

  return (
    <div>
        <Navbar/>
        <ProProfileUpper image={profile1pro} city={'Milano'} name={'Mario Rossi'} reviews={39}/>
    </div>
  )
}

export default ProfilePro