import React from 'react';
import { GraduationCap, Award, Globe } from 'lucide-react';
import { educationCredentials, spokenLanguages } from '../../data/education';
import { StaggerContainer, StaggerItem, Reveal } from '../animations/Reveal';

export default function EducationSection() {
  return (
    <div className="space-y-12">
      {/* Education Grid with Staggered Entrance */}
      <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationCredentials.map((edu) => (
          <StaggerItem
            key={edu.credential}
            direction="up"
            distance={20}
            className="p-6 sm:p-7 rounded-sm bg-[#1E1815] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:-translate-y-1 transition-all duration-300 shadow-md group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#E5C590] font-semibold px-2.5 py-1 rounded bg-[#14100E] border border-[#C5A880]/30">
                {edu.accent}
              </span>
              <GraduationCap className="w-5 h-5 text-[#C5A880] group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-semibold mb-1">
              {edu.credential}
            </h3>

            <div className="text-xs font-semibold text-[#C5A880] mb-3">
              {edu.institution}
            </div>

            <p className="text-xs text-[#CFC0A8] font-light leading-relaxed">
              {edu.highlight}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Spoken Languages Bar */}
      <Reveal direction="up" delay={0.2}>
        <div className="p-6 rounded-sm bg-[#1A1412] border border-[#C5A880]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#C5A880]" />
            <div>
              <h4 className="text-sm font-semibold text-[#FDFBF7]">Communication & Languages</h4>
              <p className="text-xs text-[#A8A19A]">Enabling comfortable consultations across diverse client demographics</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {spokenLanguages.map((lang) => (
              <div
                key={lang.language}
                className="px-3.5 py-1.5 rounded-full bg-[#14100E] border border-[#C5A880]/30 text-xs flex items-center gap-2 hover:border-[#C5A880]/60 transition-colors"
              >
                <span className="text-[#FDFBF7] font-medium">{lang.language}</span>
                <span className="text-[10px] text-[#C5A880]">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
