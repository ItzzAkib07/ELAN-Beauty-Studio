import React from 'react';
import { Sparkles, Briefcase, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { competencies } from '../../data/experience';

const iconMap = {
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  Users: Users,
  TrendingUp: TrendingUp,
};

export default function CompetencyMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {competencies.map((comp) => {
        const IconComponent = iconMap[comp.icon] || Sparkles;

        return (
          <div
            key={comp.category}
            className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all duration-300 shadow-lg group"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#E5C590] group-hover:scale-110 transition-transform">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FDFBF7] font-semibold group-hover:text-[#E5C590] transition-colors">
                  {comp.category}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed mb-6">
              {comp.description}
            </p>

            <div className="space-y-2.5">
              {comp.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 text-xs text-[#EFE8DC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
