import React from 'react';
import InteractiveCanvasParticles from './InteractiveCanvasParticles';
import InteractiveSilkWaves from './InteractiveSilkWaves';
import InteractiveSpotlight from './InteractiveSpotlight';

/**
 * SectionBackground
 * Master modular wrapper component providing luxury animated, interactive backgrounds
 * tailored to ÉLAN Beauty Studio's champagne-gold & espresso theme.
 *
 * Variants:
 * - 'hero-dust': Celestial stardust + ambient champagne aurora + cursor spotlight + subtle silk lines
 * - 'silk-contour': Harmonic flowing couture ribbons + ambient warm orbs + fine micro-dust
 * - 'stardust': Floating golden dust particles + interactive cursor deflection
 * - 'constellation': Geometric star network with connecting filaments
 * - 'luminous-bokeh': Soft champagne & rose-gold floating bokeh discs
 * - 'dual-glow': Split ambient lighting (amber-gold + soft rose) for Before/After & showcase
 * - 'geometric-gold': Delicate gold matrix pattern with connecting particles
 * - 'rose-amber': Warm romantic rose-gold & champagne aura for booking & consultations
 * - 'radiant-aura': Pulsing champagne halo with rising embers
 * - 'minimal-shimmer': Subtle refined gold dust and ambient glow for FAQ & text sections
 */
export default function SectionBackground({
  variant = 'stardust',
  interactive = true,
  density,
  showSpotlight = true,
  showWaves = false,
  showOrbs = true,
  spotlightOpacity = 0.08,
  className = '',
  customColor,
}) {
  const goldPrimary = customColor || '#C5A880';
  const goldSecondary = '#E5C590';
  const goldLight = '#F3E5C8';
  const roseTone = '#E7C9BF';
  const amberTone = '#D4AF37';

  // Variant Specific Settings
  switch (variant) {
    case 'hero-dust':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={goldSecondary}
            accentColor={goldLight}
            radius={400}
            opacity={0.12}
            interactive={interactive}
            showOrbs={true}
            orbCount={3}
          />
          <InteractiveSilkWaves
            waveCount={3}
            primaryColor={goldPrimary}
            secondaryColor={goldSecondary}
            speed={0.006}
            amplitude={35}
            opacity={0.4}
            interactive={interactive}
          />
          <InteractiveCanvasParticles
            preset="stardust"
            particleColor={goldLight}
            secondaryColor={goldSecondary}
            accentColor={goldPrimary}
            density={density || 50}
            speed={0.65}
            opacity={0.8}
            interactive={interactive}
          />
          <div className="absolute inset-0 bg-radial from-transparent via-[#14100E]/20 to-[#14100E]/60 pointer-events-none" />
        </div>
      );

    case 'silk-contour':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={goldSecondary}
            accentColor={roseTone}
            radius={350}
            opacity={0.07}
            interactive={interactive}
            showOrbs={true}
            orbCount={2}
          />
          <InteractiveSilkWaves
            waveCount={4}
            primaryColor={goldPrimary}
            secondaryColor={goldSecondary}
            accentColor={amberTone}
            speed={0.007}
            amplitude={42}
            opacity={0.55}
            interactive={interactive}
          />
          <InteractiveCanvasParticles
            preset="stardust"
            particleColor={goldSecondary}
            density={density || 24}
            speed={0.4}
            opacity={0.5}
            interactive={interactive}
          />
        </div>
      );

    case 'constellation':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={goldSecondary}
            radius={340}
            opacity={0.08}
            interactive={interactive}
            showOrbs={true}
            orbCount={2}
          />
          <InteractiveCanvasParticles
            preset="constellation"
            particleColor={goldPrimary}
            secondaryColor={goldSecondary}
            accentColor={goldLight}
            density={density || 38}
            speed={0.5}
            opacity={0.7}
            interactive={interactive}
          />
        </div>
      );

    case 'luminous-bokeh':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={roseTone}
            radius={380}
            opacity={0.08}
            interactive={interactive}
            showOrbs={true}
            orbCount={3}
          />
          <InteractiveCanvasParticles
            preset="bokeh"
            particleColor={goldSecondary}
            secondaryColor={roseTone}
            accentColor={goldLight}
            density={density || 22}
            speed={0.45}
            opacity={0.65}
            interactive={interactive}
          />
        </div>
      );

    case 'dual-glow':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          {/* Left Warm Amber-Gold Glow */}
          <div
            className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 sm:w-[480px] h-96 sm:h-[480px] rounded-full blur-[130px] opacity-15"
            style={{ backgroundColor: '#D4AF37' }}
          />
          {/* Right Soft Rose-Champagne Glow */}
          <div
            className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 sm:w-[480px] h-96 sm:h-[480px] rounded-full blur-[130px] opacity-15"
            style={{ backgroundColor: '#E7C9BF' }}
          />
          <InteractiveSpotlight
            color={goldPrimary}
            radius={360}
            opacity={0.08}
            interactive={interactive}
            showOrbs={false}
          />
          <InteractiveCanvasParticles
            preset="stardust"
            particleColor={goldLight}
            secondaryColor={roseTone}
            accentColor={goldSecondary}
            density={density || 32}
            speed={0.5}
            opacity={0.65}
            interactive={interactive}
          />
        </div>
      );

    case 'geometric-gold':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          {/* Subtle geometric luxury grid lattice */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, ${goldPrimary} 1px, transparent 1px), linear-gradient(to bottom, ${goldPrimary} 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={goldSecondary}
            radius={350}
            opacity={0.08}
            interactive={interactive}
            showOrbs={true}
            orbCount={2}
          />
          <InteractiveCanvasParticles
            preset="constellation"
            particleColor={goldPrimary}
            secondaryColor={goldSecondary}
            density={density || 30}
            speed={0.45}
            opacity={0.6}
            interactive={interactive}
          />
        </div>
      );

    case 'rose-amber':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={roseTone}
            accentColor={goldSecondary}
            radius={380}
            opacity={0.1}
            interactive={interactive}
            showOrbs={true}
            orbCount={3}
          />
          <InteractiveCanvasParticles
            preset="bokeh"
            particleColor={roseTone}
            secondaryColor={goldLight}
            accentColor={goldPrimary}
            density={density || 24}
            speed={0.4}
            opacity={0.6}
            interactive={interactive}
          />
        </div>
      );

    case 'radiant-aura':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            secondaryColor={goldSecondary}
            radius={450}
            opacity={0.12}
            interactive={interactive}
            showOrbs={true}
            orbCount={2}
          />
          <InteractiveCanvasParticles
            preset="embers"
            particleColor={goldLight}
            secondaryColor={goldSecondary}
            accentColor={goldPrimary}
            density={density || 36}
            speed={0.6}
            opacity={0.75}
            interactive={interactive}
          />
        </div>
      );

    case 'minimal-shimmer':
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          <InteractiveSpotlight
            color={goldPrimary}
            radius={300}
            opacity={0.06}
            interactive={interactive}
            showOrbs={true}
            orbCount={1}
          />
          <InteractiveCanvasParticles
            preset="stardust"
            particleColor={goldSecondary}
            density={density || 20}
            speed={0.35}
            opacity={0.45}
            interactive={interactive}
          />
        </div>
      );

    case 'stardust':
    default:
      return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
          {showSpotlight && (
            <InteractiveSpotlight
              color={goldPrimary}
              secondaryColor={goldSecondary}
              radius={350}
              opacity={spotlightOpacity}
              interactive={interactive}
              showOrbs={showOrbs}
              orbCount={2}
            />
          )}
          {showWaves && (
            <InteractiveSilkWaves
              waveCount={3}
              primaryColor={goldPrimary}
              secondaryColor={goldSecondary}
              speed={0.006}
              amplitude={35}
              opacity={0.4}
              interactive={interactive}
            />
          )}
          <InteractiveCanvasParticles
            preset="stardust"
            particleColor={goldLight}
            secondaryColor={goldSecondary}
            accentColor={goldPrimary}
            density={density || 36}
            speed={0.5}
            opacity={0.7}
            interactive={interactive}
          />
        </div>
      );
  }
}
