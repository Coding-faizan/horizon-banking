'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function TabBar({
  tabs,
  defaultTab,
  onChange,
}: {
  tabs: string[];
  defaultTab?: string;
  onChange?: (id: string) => void;
}) {
  const [active, setActive] = useState<string>(defaultTab ?? tabs[0] ?? '');

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-8">
        {tabs.map((tab) => {
          const isActive = tab === active;

          return (
            <button
              key={tab}
              onClick={() => handleChange(tab)}
              className={cn(
                'relative pb-3 text-base font-semibold text-gray-500',
                isActive && 'text-primary'
              )}
            >
              {tab}

              {isActive && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
