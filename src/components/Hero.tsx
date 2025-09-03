import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-3">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i + 1} opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-16 h-16 border border-cyan-400/30 rotate-45 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
          <span className="block">Transform Ideas</span>
          <span className="block">Into Digital</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>

        {/* Typewriter Tagline */}
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <TypewriterText 
            texts={[
              "Your Vision, Perfected.",
              "Innovative Software Solutions.",
              "Stunning UI/UX Design.",
              "Future-Ready Development."
            ]}
          />
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {[
            { icon: Code, label: 'Development' },
            { icon: Palette, label: 'Design' },
            { icon: Zap, label: 'Innovation' }
          ].map(({ icon: Icon, label }, index) => (
            <div 
              key={label}
              className="flex flex-col items-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-110">
                <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-sm text-gray-400 mt-2 group-hover:text-cyan-400 transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 ml-4"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;