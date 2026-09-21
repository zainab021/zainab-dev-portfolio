import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle, sparse ambient particles
    const particleCount = Math.min(36, Math.floor(window.innerWidth / 40));
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(184, 108, 255, ', // accent purple
      'rgba(232, 155, 255, ', // soft lavender
      'rgba(255, 143, 216, ', // pink
      'rgba(205, 180, 255, '  // subtle lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
        maxAlpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render gentle floating dust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Deep Plum Background */}
      <div className="absolute inset-0 bg-[#0B0714]" />

      {/* Atmospheric Radial Glows */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(ellipse at center, #6B2C91 0%, #241132 50%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[25%] -right-[10%] w-[650px] h-[650px] rounded-full opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(circle at center, #B86CFF 0%, #301147 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[60%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle at center, #FF8FD8 0%, #241132 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-1/3 w-[800px] h-[500px] rounded-full opacity-25 blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse at center, #B86CFF 0%, #170B28 60%, transparent 80%)'
        }}
      />

      {/* Fine Subtle Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Very faint overlay noise texture for cinematic depth */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
