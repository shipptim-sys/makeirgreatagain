import React from "react";
export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-200 ring-1 ring-inset ring-brand-500/30">
      {children}
    </span>
  );
}