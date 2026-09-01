import React, { useRef, useEffect } from 'react';

/**
 * InteractiveSilkWaves
 * Mathematical harmonic multi-layered couture silk ribbons & contour waves.
 * Reacts dynamically to pointer coordinates and scrolling with fluid inertia.
 */
export default function InteractiveSilkWaves({
  waveCount = 4,
  primaryColor = '#C5A880',
  secondaryColor = '#E5C590',
  accentColor = '#A88758',
  speed = 0.008,
  amplitude = 45,
  opacity = 0.6,
  interactive = true,
  className = '',
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

    let time = 0;
    const pointer = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      isHovered: false,
    };

    const isMobile = window.innerWidth < 768;
    const actualWaves = isMobile ? Math.min(waveCount, 3) : waveCount;
    const actualAmp = isMobile ? amplitude * 0.6 : amplitude;

    // Silk Wave Configurations
    const waveConfigs = [
      {
        frequency: 0.0018,
        speedMultiplier: 1.0,
        phaseOffset: 0,
        yOffsetRatio: 0.35,
        strokeColor: primaryColor,
        alpha: 0.22,
        lineWidth: 1.4,
      },
      {
        frequency: 0.0022,
        speedMultiplier: 0.75,
        phaseOffset: 2.1,
        yOffsetRatio: 0.48,
        strokeColor: secondaryColor,
        alpha: 0.18,
        lineWidth: 1.1,
      },
      {
        frequency: 0.0015,
        speedMultiplier: 1.25,
        phaseOffset: 4.3,
        yOffsetRatio: 0.62,
        strokeColor: accentColor,
        alpha: 0.2,
        lineWidth: 1.2,
      },
      {
        frequency: 0.0028,
        speedMultiplier: 0.6,
        phaseOffset: 1.2,
        yOffsetRatio: 0.75,
        strokeColor: primaryColor,
        alpha: 0.15,
        lineWidth: 1.0,
      },
    ];

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

    const parent = canvas.parentElement || canvas;

    const handlePointerMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      pointer.targetX = clientX - rect.left;
      pointer.targetY = clientY - rect.top;
      pointer.isHovered = true;
    };

    const handlePointerLeave = () => {
      pointer.isHovered = false;
      pointer.targetX = width * 0.5;
      pointer.targetY = height * 0.5;
    };

    if (interactive) {
      parent.addEventListener('mousemove', handlePointerMove, { passive: true });
      parent.addEventListener('mouseleave', handlePointerLeave, { passive: true });
      parent.addEventListener('touchmove', handlePointerMove, { passive: true });
      parent.addEventListener('touchend', handlePointerLeave, { passive: true });
    }

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

    // Animation Loop
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Smooth pointer tracking
        pointer.x += (pointer.targetX - pointer.x) * 0.06;
        pointer.y += (pointer.targetY - pointer.y) * 0.06;

        time += speed;

        // Draw each fluid silk wave ribbon
        for (let i = 0; i < actualWaves; i++) {
          const cfg = waveConfigs[i % waveConfigs.length];
          const baseY = height * cfg.yOffsetRatio;

          ctx.save();
          ctx.beginPath();

          // Step width for high-fidelity curve rendering
          const step = Math.max(8, Math.floor(width / 75));

          for (let x = 0; x <= width + step; x += step) {
            // Interactive mouse wave disturbance
            const distFromMouse = Math.abs(x - pointer.x);
            const mouseEffect = interactive && pointer.isHovered
              ? Math.max(0, 1 - distFromMouse / (width * 0.35)) * (pointer.y - baseY) * 0.28
              : 0;

            const waveAngle = x * cfg.frequency + time * cfg.speedMultiplier + cfg.phaseOffset;
            const y = baseY +
              Math.sin(waveAngle) * actualAmp +
              Math.cos(waveAngle * 0.6 + time * 0.4) * (actualAmp * 0.4) +
              mouseEffect;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          // Subtle gradient stroke for a shimmering silk effect
          const grad = ctx.createLinearGradient(0, 0, width, 0);
          grad.addColorStop(0, hexToRgba(cfg.strokeColor, 0));
          grad.addColorStop(0.2, hexToRgba(cfg.strokeColor, cfg.alpha * 0.6));
          grad.addColorStop(0.5, hexToRgba(secondaryColor, cfg.alpha * 1.3));
          grad.addColorStop(0.8, hexToRgba(cfg.strokeColor, cfg.alpha * 0.6));
          grad.addColorStop(1, hexToRgba(cfg.strokeColor, 0));

          ctx.strokeStyle = grad;
          ctx.lineWidth = cfg.lineWidth;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Soft ambient glow halo on wave 0 & 1
          if (i <= 1) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = cfg.strokeColor;
          }

          ctx.restore();
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
  }, [waveCount, primaryColor, secondaryColor, accentColor, speed, amplitude, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
