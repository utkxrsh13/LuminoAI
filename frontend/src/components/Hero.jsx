import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Users, 
  Star,
  Zap,
  Brain,
  Palette,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const aiFeatures = [
    { icon: FileText, text: "AI Writing" },
    { icon: ImageIcon, text: "Image Generation" },
    { icon: Brain, text: "Smart Analysis" },
    { icon: Palette, text: "Creative Tools" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden animated-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float-animation"
          style={{
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${10 + mousePosition.y * 0.01}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation"
          style={{
            right: `${15 + mousePosition.x * 0.008}%`,
            top: `${30 + mousePosition.y * 0.008}%`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl float-animation"
          style={{
            left: `${60 + mousePosition.x * 0.005}%`,
            bottom: `${20 + mousePosition.y * 0.005}%`,
            animationDelay: '4s'
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px, 80px 80px',
            backgroundPosition: '0 0, 20px 20px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Powered by Advanced AI</span>
            <span className="text-xs bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-full">
              Beta
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            Create Amazing
            <br />
            <span className="gradient-text relative">
              AI-Powered
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl -z-10" />
            </span>
            <br />
            Content
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your content creation with our suite of premium AI tools. 
            <br className="hidden sm:block" />
            Write articles, generate images, and unlock limitless creativity with ease.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index}
                className="glass flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => navigate('/ai')}
              className="btn-primary group flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300 glow-purple"
            >
              <Zap className="w-5 h-5" />
              <span>Start Creating Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary group flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="glass inline-flex items-center space-x-4 px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-2 border-gray-900 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-gray-300">
              <span className="font-semibold text-white">10k+ creators</span> trust LuminoAI
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

export default Hero