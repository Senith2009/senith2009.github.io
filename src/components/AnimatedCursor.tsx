import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={`w-5 h-5 rounded-full bg-cyan-400 transition-transform duration-200 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}></div>
      </div>

      {/* Trailing effect */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transition: 'all 0.3s ease-out',
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-cyan-400/50 transition-all duration-300 ${
          isHovering ? 'scale-200 border-purple-500/50' : 'scale-100'
        }`}></div>
      </div>
    </>
  );
};

export default AnimatedCursor;