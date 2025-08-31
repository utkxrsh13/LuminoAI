import { useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  House, 
  SquarePen, 
  Hash, 
  Image, 
  Eraser, 
  Scissors, 
  FileText, 
  Users, 
  LogOut,
  User,
  Sparkles
} from 'lucide-react'

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'AI Article Writer', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Title Generator', Icon: Hash },
  { to: '/ai/generate-images', label: 'AI Image Generation', Icon: Image },
  { to: '/ai/remove-background', label: 'Background Removal', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Object Removal', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Resume Reviewer', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users }
]

const SideBar = ({ sidebar, setSideBar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 640) {
      setSideBar(false);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className={`w-64 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 flex flex-col max-sm:absolute top-14 bottom-0 z-40 ${
      sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
    } transition-all duration-300 ease-in-out`}>
      
      {/* User Profile Section */}
      <div className='p-6 border-b border-white/10'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className="relative">
            <img 
              src={user?.imageUrl} 
              alt="Avatar" 
              className='w-12 h-12 rounded-full border-2 border-purple-500/20' 
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div className='flex-1 min-w-0'>
            <h2 className='text-white font-semibold truncate'>{user?.fullName}</h2>
            <p className='text-gray-400 text-sm truncate'>{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
        
        <button
          onClick={openUserProfile}
          className="w-full glass border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:border-purple-500/30 transition-all duration-300 flex items-center space-x-2"
        >
          <User className="w-4 h-4" />
          <span>Manage Account</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <div className='flex-1 overflow-y-auto py-4'>
        <div className='px-3 space-y-1'>
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <button
                key={index}
                onClick={() => handleNavigation(item.to)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.Icon className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'
                }`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Section */}
      <div className='p-4 border-t border-white/10'>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 group"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
        
        <div className="mt-3 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <span>LuminoAI v1.0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar