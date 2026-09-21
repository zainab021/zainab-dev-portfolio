import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer devices (desktops/laptops, not touchscreens)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center pinpoint */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-[#E89BFF] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: '0 0 10px rgba(232, 155, 255, 0.8)'
        }}
      />
      {/* Trailing ambient aura */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full border border-[#B86CFF]/40 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block ${
          isHovered
            ? 'w-12 h-12 bg-[#B86CFF]/15 border-[#E89BFF]/60 scale-110'
            : 'w-7 h-7 bg-transparent scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
