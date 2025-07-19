import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout