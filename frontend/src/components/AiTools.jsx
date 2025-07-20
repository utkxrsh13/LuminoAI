import React from 'react'
import {AiToolsData} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser, useClerk } from '@clerk/clerk-react'

const AiTools = () => {

  const navigate = useNavigate()
  const {user} = useUser();
  const {openSignIn} = useClerk();

  const handleToolClick = (toolPath) => {
    if (user) {
      navigate(toolPath);
    } else {
      // If user is not logged in, open sign-in modal
      openSignIn();
    }
  };
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center'>
        <h2 className='text-white text-5xl font-semibold mb-4'>Powerful AI Tools</h2>
        <p className='text-gray-400 max-w-lg mx-auto'>Everything you need to supercharge your workflow.</p>
      </div>

      <div className='flex flex-wrap justify-center mt-10'>
        {AiToolsData.map((tool, index) => (
          <div key={index} className='p-8 m-4 max-w-xs rounded-lg glass border border-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group' onClick={() => handleToolClick(tool.path)}>
            <tool.Icon className='w-12 h-12 text-white rounded-xl p-2 mb-4' style={{
              background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`
            }} />
            <h3 className='mt-6 mb-3 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors'>{tool.title}</h3>
            <p className='text-gray-400 text-sm max-w-[95%] leading-relaxed'>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools