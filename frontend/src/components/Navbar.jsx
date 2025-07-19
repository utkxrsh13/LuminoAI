import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo */}
            <div 
              onClick={() => navigate('/')} 
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                LuminoAI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Action Button */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all"
                      }
                    }}
                  />
                </div>
              ) : (
                <button 
                  onClick={openSignIn}
                  className="btn-primary flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg glass border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass border-t border-white/10 px-4 py-6 space-y-4">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20"></div>
    </>
  )
}

const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a 
    href={href}
    className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-white/5 hover:border-purple-500/30"
  >
    {children}
  </a>
);

export default Navbar
