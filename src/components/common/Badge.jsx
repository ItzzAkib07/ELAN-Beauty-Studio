import React from 'react';

export default function Badge({ children, variant = 'gold', className = '', icon: Icon }) {
  const variants = {
    gold: "bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#E5C590]",
    solid: "bg-[#C5A880] text-[#14100E] font-semibold",
    subtle: "bg-[#241D1A] border border-[#C5A880]/15 text-[#EFE8DC]",
    outline: "border border-[#C5A880]/40 text-[#C5A880]"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest rounded-full select-none ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
