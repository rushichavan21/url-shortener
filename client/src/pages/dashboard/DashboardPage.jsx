import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './dashboard.css'
import CenterPart from '../../components/centerPart/CenterPart'
import Options from '../../components/options/Options'
const DashboardPage = () => {
  return (
    <div className='dashboard-page-wrapper'>
      <Navbar/>
      <Options/>
    </div>
  )
}

export default DashboardPage