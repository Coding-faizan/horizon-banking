'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

/**
 * Reusable TabBar component (underline style)
 *
 * Matches a simple bank-style tab bar with an active underline.
 * No animation libraries required.
 *
 * Props:
 * - tabs: Array<{ id: string; label: string }>
 * - defaultTab?: string
 * - onChange?: (id: string) => void
 */
export default function TabBar({
  tabs,
  defaultTab,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  defaultTab?: string;
  onChange?: (id: string) => void;
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-8">
        {tabs.map((tab) => {
          const isActive = tab.id === active;

          return (
            <button
              key={tab.id}
              onClick={() => handleChange(tab.id)}
              className={cn(
                'relative pb-3 text-base font-semibold text-gray-500',
                isActive && 'text-primary',
              )}
            >
              {tab.label}

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

/* Example usage:

const tabs = [
  { id: "chase", label: "Chase Bank" },
  { id: "boa", label: "Bank of America" },
  { id: "fpb", label: "First Platypus Bank" },
];

<TabBar
  tabs={tabs}
  defaultTab="chase"
  onChange={(id) => console.log(id)}
/>
*/
