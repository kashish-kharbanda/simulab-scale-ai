'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, Suspense } from 'react';

function SearchParamsHandler() {
  const search = useSearchParams();

  // Keep task_id stable across tab nav via querystring and localStorage
  useEffect(() => {
    const qTask = search.get('task_id');
    if (qTask) {
      try {
        localStorage.setItem('simulab_current_task_id', qTask);
      } catch {}
    }
  }, [search]);

  return null;
}

export default function SimulabSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>
      
      {/* Route header with product title and subtitle */}
      <div className="w-full" style={{ background: "hsl(var(--background))", borderBottom: "1px solid hsl(var(--border))" }}>
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col items-center text-center">
          <div
            className="text-2xl font-semibold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(90deg, #8b5cf6 0%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 18px rgba(96,165,250,0.15)",
              letterSpacing: "-0.01em",
            }}
          >
            SimuLab
          </div>
          <div
            className="text-sm mt-1"
            style={{ color: "rgba(96,165,250,0.85)" }}
          >
            Accelerate Lead Molecule Discovery and De-Risk R&amp;D
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}


