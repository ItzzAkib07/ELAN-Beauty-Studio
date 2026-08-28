import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle, Sparkles, Building2 } from 'lucide-react';
import { careerTimeline } from '../../data/experience';
import Badge from '../common/Badge';

export default function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* Central Vertical Timeline Gold Line */}
      <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E5C590] via-[#C5A880]/40 to-[#14100E] pointer-events-none" />

      <div className="space-y-12 md:space-y-16">
        {careerTimeline.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12 pl-12 md:pl-0`}
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 z-10 w-8 h-8 rounded-full bg-[#1A1412] border-2 border-[#E5C590] shadow-[0_0_15px_rgba(197,168,128,0.5)] flex items-center justify-center text-[#E5C590]">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Timeline Card */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                <div className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/25 hover:border-[#C5A880]/50 transition-all duration-300 shadow-xl group">
                  {/* Period & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#E5C590] font-medium tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.period}</span>
                    </div>

                    <Badge variant="gold">{item.badge}</Badge>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FDFBF7] font-semibold group-hover:text-[#E5C590] transition-colors mb-1">
                    {item.role}
                  </h3>

                  {/* Organization & Location */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#C5A880] mb-4">
                    <span className="font-semibold text-sm text-[#EFE8DC]">{item.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#A8A19A]">
                      <MapPin className="w-3 h-3 text-[#C5A880]" />
                      {item.location}
                    </span>
                  </div>

                  {/* Professional Summary */}
                  <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  {/* Responsibilities List */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-[11px] uppercase tracking-widest text-[#E5C590] font-semibold">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 text-xs text-[#EFE8DC] font-light">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 mt-1.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Skills Chips */}
                  <div className="pt-4 border-t border-[#C5A880]/15 flex flex-wrap gap-1.5">
                    {item.coreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] tracking-wide uppercase px-2.5 py-1 rounded bg-[#14100E] border border-[#C5A880]/20 text-[#CFC0A8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty counterpart for balance on desktop */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
