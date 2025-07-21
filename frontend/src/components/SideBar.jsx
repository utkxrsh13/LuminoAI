import { useUser } from '@clerk/clerk-react'
import React from 'react'

const SideBar = ({sidebar, setSideBar}) => {

  const {user} = useUser();

  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex flex-col items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
      <div className='my-7 w-full'>

      </div>
    </div>
  )
}

export default SideBar