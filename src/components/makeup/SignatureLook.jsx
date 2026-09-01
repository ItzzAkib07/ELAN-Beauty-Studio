import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { signatureLook } from '../../data/makeup';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../animations/Reveal';
import SectionBackground from '../backgrounds/SectionBackground';

export default function SignatureLook({ onOpenLook }) {
  return (
    <div className="relative glass-panel rounded-sm p-6 sm:p-10 lg:p-12 border border-[#C5A880]/30 shadow-2xl overflow-hidden">
      {/* Interactive Constellation & Ambient Light Glow */}
      <SectionBackground variant="constellation" density={32} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Featured Image Column */}
        <Reveal direction="right" distance={30} className="lg:col-span-6 relative group">
          <div className="relative overflow-hidden rounded-sm border border-[#C5A880]/40 shadow-2xl">
            <motion.img
              src={signatureLook.image}
              alt={signatureLook.title}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/80 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <Badge variant="solid">Signature Masterpiece</Badge>
            </div>
          </div>
        </Reveal>

        {/* Look Breakdown & Techniques Column */}
        <div className="lg:col-span-6 space-y-5">
          <Reveal direction="left" delay={0.1}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Artistry Look</span>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FDFBF7] font-semibold leading-tight">
              {signatureLook.title}
            </h3>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <p className="text-xs uppercase tracking-widest text-[#E5C590] font-medium">
              {signatureLook.subtitle}
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.4}>
            <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
              {signatureLook.description}
            </p>
          </Reveal>

          {/* Techniques list with Staggered entrance */}
          <div className="space-y-2.5 pt-2">
            <Reveal direction="up" delay={0.45}>
              <h4 className="text-xs uppercase tracking-wider text-[#FDFBF7] font-semibold">
                Artistry Blueprint & Technique:
              </h4>
            </Reveal>

            <StaggerContainer staggerChildren={0.1} delayChildren={0.5} className="space-y-2 text-xs text-[#EFE8DC]">
              {signatureLook.techniques.map((tech, idx) => (
                <StaggerItem key={idx} direction="left" distance={15} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <Reveal direction="up" delay={0.6}>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Request This Look
              </Button>
              <Button
                to="/makeup"
                variant="secondary"
                size="md"
              >
                Explore All Looks
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
