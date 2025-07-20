import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'

const Layout = () => {

  const navigate = useNavigate();

  const [sidebar, setSideBar] = useState(false)


  return (
    <div className="h-screen bg-black text-white flex flex-col items-start justify-start">
       <nav className='w-full min-h-14 flex items-center justify-between px-8 bg-black/80 backdrop-blur-md border-b border-white/10'>
        <img src={assets.logo} alt="Logo" onClick={()=>navigate('/')}/>
        {
          sidebar ? <X className='w-8 h-8 sm:hidden cursor-pointer' onClick={()=>setSideBar(false)}/> : <Menu className='w-8 h-8 sm:hidden cursor-pointer' onClick={()=>setSideBar(true)}/>
        }
       </nav>


      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout