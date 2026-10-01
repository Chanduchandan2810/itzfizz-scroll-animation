'use client';

import { useEffect, useRef } from 'react';

const REFINED_COLORS = ['#FF6B4A', '#2F80ED', '#F2994A', '#27AE60', '#E2B93B'];
const CELEBRATION_PALETTE = ['#FFD700', '#F5A623', '#FF6B4A', '#2F80ED', '#27AE60', '#E2B93B'];

const PERIPHERAL_POSITIONS = [
  { x: 5, y: 12 }, { x: 12, y: 16 }, { x: 8, y: 28 }, { x: 18, y: 22 },
  { x: 6, y: 40 }, { x: 14, y: 46 }, { x: 22, y: 34 }, { x: 4, y: 56 },
  { x: 16, y: 62 }, { x: 24, y: 52 }, { x: 10, y: 72 },
  { x: 92, y: 14 }, { x: 84, y: 18 }, { x: 94, y: 30 }, { x: 82, y: 26 },
  { x: 90, y: 42 }, { x: 80, y: 48 }, { x: 76, y: 36 }, { x: 93, y: 58 },
  { x: 85, y: 64 }, { x: 78, y: 54 }, { x: 88, y: 74 },
  { x: 28, y: 8 }, { x: 38, y: 6 }, { x: 50, y: 5 }, { x: 62, y: 7 }, { x: 72, y: 9 },
  { x: 2, y: 22 }, { x: 96, y: 24 }, { x: 3, y: 82 }, { x: 97, y: 80 },
  { x: 20, y: 10 }, { x: 80, y: 8 }, { x: 15, y: 86 }
];

class CanvasParticle {
  constructor(canvasW, canvasH, isInitial = false) {
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.reset(isInitial);
  }

  reset(isInitial = false) {
    const dpr = window.devicePixelRatio || 1;
    const isLeft = Math.random() > 0.5;
    this.x = isLeft ? Math.random() * (this.canvasW * 0.32) : (this.canvasW * 0.68 + Math.random() * (this.canvasW * 0.32));
    this.y = isInitial ? Math.random() * this.canvasH : -20 * dpr - Math.random() * 50;
    this.color = CELEBRATION_PALETTE[Math.floor(Math.random() * CELEBRATION_PALETTE.length)];
    this.size = (Math.random() * 5 + 3) * dpr;
    this.speedY = (Math.random() * 2 + 1.2) * dpr;
    this.speedX = (Math.random() - 0.5) * 1.2 * dpr;
    this.flutterSpeed = Math.random() * 0.08 + 0.03;
    this.angle = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.06;
    this.rotation = Math.random() * Math.PI * 2;
    this.opacity = Math.random() * 0.35 + 0.5;
  }

  update() {
    this.y += this.speedY;
    this.x += Math.sin(this.angle) * 1.2 + this.speedX;
    this.angle += this.flutterSpeed;
    this.rotation += this.rotationSpeed;
    if (this.y > this.canvasH + 30) this.reset(false);
  }

  draw(c) {
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.rotation);
    c.scale(1, Math.cos(this.angle));
    c.globalAlpha = Math.max(0.15, Math.min(0.85, this.opacity));
    c.fillStyle = this.color;
    c.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 1.5);
    c.restore();
  }
}

export default function Confetti() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let canvasW = 0;
    let canvasH = 0;
    
    function resizeCanvas() {
      canvasW = canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvasH = canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new CanvasParticle(canvasW, canvasH, true));
    }
    
    let rafId = null;
    let isRunning = false;
    
    function render() {
      ctx.clearRect(0, 0, canvasW, canvasH);
      for (let i = 0; i < particles.length; i++) {
        particles[i].canvasW = canvasW;
        particles[i].canvasH = canvasH;
        particles[i].update();
        particles[i].draw(ctx);
      }
      if (isRunning) {
        rafId = requestAnimationFrame(render);
      }
    }
    
    // We attach start/stop to the window so GSAP can trigger it easily,
    // or we can dispatch a custom event. Using window is simpler for integration.
    window.startGlitter = () => {
      if (isRunning) return;
      isRunning = true;
      canvas.style.opacity = '1';
      rafId = requestAnimationFrame(render);
    };
    
    window.stopGlitter = () => {
      if (!isRunning) return;
      canvas.style.opacity = '0';
      isRunning = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.stopGlitter();
      delete window.startGlitter;
      delete window.stopGlitter;
    };
  }, []);

  return (
    <>
      <canvas
        id="celebration-canvas"
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 opacity-0 transition-opacity duration-500"
      />
      
      <div id="confetti-container" className="absolute inset-0 pointer-events-none z-20 overflow-hidden transition-opacity duration-500 opacity-0">
        {PERIPHERAL_POSITIONS.map((pos, idx) => {
          const shapeType = idx % 5;
          const color = REFINED_COLORS[idx % REFINED_COLORS.length];
          const driftClasses = ['drift-a', 'drift-b', 'drift-c'];
          const driftClass = driftClasses[idx % driftClasses.length];
          const duration = 6.5 + (idx % 6) * 1.1;
          const delay = (idx * 0.28) % 4;
          
          let style = {
            '--drift-dur': `${duration}s`,
            animationDelay: `-${delay}s`,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            backgroundColor: color,
            width: '5px',
            height: '9px',
            borderRadius: '1px'
          };
          
          if (shapeType === 1) {
            style.width = '4px'; style.height = '7px';
          } else if (shapeType === 2) {
            style.width = '5px'; style.height = '5px'; style.borderRadius = '1.5px';
          } else if (shapeType === 3) {
            style.width = '4.5px'; style.height = '4.5px'; style.borderRadius = '50%';
          } else if (shapeType === 4) {
            style.width = '5px'; style.height = '5px'; style.transform = 'rotate(45deg)'; style.borderRadius = '0.5px';
          }

          return (
            <div
              key={idx}
              className={`absolute pointer-events-none select-none ${driftClass}`}
              style={style}
            />
          );
        })}
      </div>
    </>
  );
}
