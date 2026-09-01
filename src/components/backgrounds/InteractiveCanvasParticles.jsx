import React, { useRef, useEffect } from 'react';

/**
 * InteractiveCanvasParticles
 * High-performance 2D Canvas particle engine with 4 luxury presets:
 * - 'stardust': Floating gold dust & micro-sparkles with interactive pointer physics
 * - 'constellation': Geometric golden stars with interactive connecting filaments
 * - 'bokeh': Soft champagne & rose-gold luminous out-of-focus discs
 * - 'embers': Upward rising glowing golden embers
 */
export default function InteractiveCanvasParticles({
  preset = 'stardust',
  particleColor = '#C5A880',
  secondaryColor = '#E5C590',
  accentColor = '#F3E5C8',
  density = 40, // Base particle count on desktop
  interactive = true,
  speed = 0.6,
  className = '',
  opacity = 0.75,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse / Touch tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
      isHovered: false,
    };

    // Screen-size adjusted density
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const count = isMobile
      ? Math.max(12, Math.floor(density * 0.35))
      : isTablet
      ? Math.max(20, Math.floor(density * 0.6))
      : density;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const actualSpeed = prefersReducedMotion ? 0.1 : speed;

    // Helper: Hex to RGBA
    const hexToRgba = (hex, alpha) => {
      const clean = hex.replace('#', '');
      let r = 197, g = 168, b = 128;
      if (clean.length === 6) {
        r = parseInt(clean.substring(0, 2), 16);
        g = parseInt(clean.substring(2, 4), 16);
        b = parseInt(clean.substring(4, 6), 16);
      }
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const colorPalette = [particleColor, secondaryColor, accentColor];

    // Particle Object
    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (preset === 'embers' ? Math.random() * width : Math.random() * width);
        this.y = initial ? Math.random() * height : (preset === 'embers' ? height + 10 : Math.random() * height);
        
        // Base attributes depending on preset
        if (preset === 'bokeh') {
          this.baseRadius = Math.random() * 22 + 8;
          this.vx = (Math.random() - 0.5) * 0.3 * actualSpeed;
          this.vy = -(Math.random() * 0.4 + 0.15) * actualSpeed;
          this.baseAlpha = Math.random() * 0.12 + 0.04;
          this.pulseSpeed = Math.random() * 0.015 + 0.005;
        } else if (preset === 'embers') {
          this.baseRadius = Math.random() * 2.2 + 0.8;
          this.vx = (Math.random() - 0.5) * 0.4 * actualSpeed;
          this.vy = -(Math.random() * 0.8 + 0.3) * actualSpeed;
          this.baseAlpha = Math.random() * 0.6 + 0.2;
          this.pulseSpeed = Math.random() * 0.03 + 0.01;
        } else if (preset === 'constellation') {
          this.baseRadius = Math.random() * 2 + 1;
          this.vx = (Math.random() - 0.5) * 0.5 * actualSpeed;
          this.vy = (Math.random() - 0.5) * 0.5 * actualSpeed;
          this.baseAlpha = Math.random() * 0.5 + 0.25;
          this.pulseSpeed = Math.random() * 0.02 + 0.01;
        } else {
          // 'stardust'
          this.baseRadius = Math.random() * 1.8 + 0.6;
          this.vx = (Math.random() - 0.5) * 0.4 * actualSpeed;
          this.vy = (Math.random() - 0.5) * 0.4 * actualSpeed;
          this.baseAlpha = Math.random() * 0.55 + 0.2;
          this.pulseSpeed = Math.random() * 0.025 + 0.01;
        }

        this.radius = this.baseRadius;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.twinkleFactor = Math.random() > 0.65; // Some particles sparkle brightly
      }

      update() {
        this.pulse += this.pulseSpeed;
        const currentAlpha = Math.max(0.05, this.baseAlpha + Math.sin(this.pulse) * (this.twinkleFactor ? 0.25 : 0.1));

        // Interactive mouse physics
        if (interactive && mouse.isHovered) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 1.8;
            // Subtle magnetic deflection
            this.x -= (dx / dist) * force * 1.2;
            this.y -= (dy / dist) * force * 1.2;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Boundary wrapping
        if (preset === 'embers') {
          if (this.y < -20 || this.x < -20 || this.x > width + 20) {
            this.reset(false);
          }
        } else {
          if (this.x < -20) this.x = width + 20;
          if (this.x > width + 20) this.x = -20;
          if (this.y < -20) this.y = height + 20;
          if (this.y > height + 20) this.y = -20;
        }

        return currentAlpha;
      }

      draw(alpha) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (preset === 'bokeh') {
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius
          );
          gradient.addColorStop(0, hexToRgba(this.color, alpha * 1.4));
          gradient.addColorStop(0.7, hexToRgba(this.color, alpha * 0.6));
          gradient.addColorStop(1, hexToRgba(this.color, 0));
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = hexToRgba(this.color, alpha);

          // Subtle glow for stardust and constellation nodes
          if (this.twinkleFactor && (preset === 'stardust' || preset === 'constellation')) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
          }
        }

        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const particles = Array.from({ length: count }, () => new Particle());

    // Connect constellation lines
    const drawConstellationLines = () => {
      if (preset !== 'constellation' && preset !== 'stardust') return;
      const maxDistance = preset === 'constellation' ? 120 : 75;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            let lineAlpha = (1 - dist / maxDistance) * (preset === 'constellation' ? 0.16 : 0.08);

            // Highlight lines near mouse
            if (interactive && mouse.isHovered) {
              const mouseDist1 = Math.sqrt((mouse.x - p1.x) ** 2 + (mouse.y - p1.y) ** 2);
              const mouseDist2 = Math.sqrt((mouse.x - p2.x) ** 2 + (mouse.y - p2.y) ** 2);
              if (mouseDist1 < mouse.radius || mouseDist2 < mouse.radius) {
                lineAlpha = Math.min(0.4, lineAlpha * 2.2);
              }
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = hexToRgba(particleColor, lineAlpha);
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    };

    // Smooth resize handler with DPR scaling
    const handleResize = () => {
      const parent = canvas.parentElement;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    // Mouse / Touch Event Listeners on parent container
    const parent = canvas.parentElement || canvas;

    const handlePointerMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.isHovered = true;
    };

    const handlePointerLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    if (interactive) {
      parent.addEventListener('mousemove', handlePointerMove, { passive: true });
      parent.addEventListener('mouseleave', handlePointerLeave, { passive: true });
      parent.addEventListener('touchmove', handlePointerMove, { passive: true });
      parent.addEventListener('touchend', handlePointerLeave, { passive: true });
    }

    // Viewport Intersection Observer for 0% CPU consumption offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(parent);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(parent);

    // Main Render Loop
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse position damping (lerp)
        if (mouse.isHovered) {
          mouse.x += (mouse.targetX - mouse.x) * 0.12;
          mouse.y += (mouse.targetY - mouse.y) * 0.12;
        } else {
          mouse.x = -1000;
          mouse.y = -1000;
        }

        // Draw connections first (if preset uses lines)
        drawConstellationLines();

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const alpha = particles[i].update();
          particles[i].draw(alpha);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      if (interactive) {
        parent.removeEventListener('mousemove', handlePointerMove);
        parent.removeEventListener('mouseleave', handlePointerLeave);
        parent.removeEventListener('touchmove', handlePointerMove);
        parent.removeEventListener('touchend', handlePointerLeave);
      }
    };
  }, [preset, particleColor, secondaryColor, accentColor, density, interactive, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
