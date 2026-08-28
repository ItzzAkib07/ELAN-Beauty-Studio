import React from 'react';
import { Clock, CheckCircle2, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function ServiceCard({ service }) {
  return (
    <div
      id={service.id}
      className={`glass-panel rounded-sm overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
        service.popular
          ? 'border-[#E5C590]/50 shadow-[0_0_30px_rgba(197,168,128,0.15)] ring-1 ring-[#C5A880]/30'
          : 'border-[#C5A880]/20 hover:border-[#C5A880]/40'
      }`}
    >
      <div>
        {/* Service Image Header */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/30 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#14100E]/80 backdrop-blur-md text-[#E5C590] border border-[#C5A880]/30 rounded-full">
              {service.category}
            </span>
            {service.popular && (
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-[#E5C590] to-[#C5A880] text-[#14100E] rounded-full shadow-md">
                Most Requested
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#EFE8DC]">
            <span className="flex items-center gap-1 bg-[#14100E]/80 px-2.5 py-1 rounded-sm border border-[#C5A880]/20">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              {service.duration}
            </span>
            <span className="text-[11px] text-[#C5A880] font-medium bg-[#14100E]/80 px-2.5 py-1 rounded-sm border border-[#C5A880]/20">
              {service.experienceCount}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold mb-1">
              {service.title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#C5A880] font-medium">
              {service.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 pt-2 border-t border-[#C5A880]/15">
            <h4 className="text-[11px] uppercase tracking-wider text-[#E5C590] font-semibold">
              Package Includes:
            </h4>
            <div className="space-y-2 text-xs text-[#EFE8DC]">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-6 sm:p-7 pt-0 border-t border-transparent">
        <div className="pt-4 border-t border-[#C5A880]/15">
          <Button
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            variant={service.popular ? "primary" : "secondary"}
            fullWidth
            size="md"
            icon={Calendar}
            iconPosition="left"
          >
            Book This Service
          </Button>
        </div>
      </div>
    </div>
  );
}
