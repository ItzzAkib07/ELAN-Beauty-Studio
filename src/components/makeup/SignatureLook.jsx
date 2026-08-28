import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { signatureLook } from '../../data/makeup';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function SignatureLook({ onOpenLook }) {
  return (
    <div className="relative glass-panel rounded-sm p-6 sm:p-10 lg:p-12 border border-[#C5A880]/30 shadow-2xl overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Featured Image Column */}
        <div className="lg:col-span-6 relative group">
          <div className="relative overflow-hidden rounded-sm border border-[#C5A880]/40 shadow-2xl">
            <img
              src={signatureLook.image}
              alt={signatureLook.title}
              className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/80 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <Badge variant="solid">Signature Masterpiece</Badge>
            </div>
          </div>
        </div>

        {/* Look Breakdown & Techniques Column */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Artistry Look</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FDFBF7] font-semibold leading-tight">
            {signatureLook.title}
          </h3>

          <p className="text-xs uppercase tracking-widest text-[#E5C590] font-medium">
            {signatureLook.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
            {signatureLook.description}
          </p>

          {/* Techniques list */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs uppercase tracking-wider text-[#FDFBF7] font-semibold">
              Artistry Blueprint & Technique:
            </h4>
            <div className="space-y-2 text-xs text-[#EFE8DC]">
              {signatureLook.techniques.map((tech, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
}
