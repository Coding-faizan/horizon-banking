'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check, Plus } from 'lucide-react';
import { BankIcon } from './ui/icons/BankIcon';
import { cn } from '@/lib/utils';
import { Account } from '@/types/types';
import { accounts } from '@/mocks/account.mocks';

export default function AccountSelect({
  className,
  selectedAccount,
  onSelect,
}: {
  className?: string;
  selectedAccount?: Account;
  onSelect?: (account: Account) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-xs text-left"
      >
        <div className="flex items-center gap-3">
          <BankIcon />
          <span className="text-base font-medium text-gray-800">
            {selectedAccount ? selectedAccount.name : 'Select Account'}
          </span>
        </div>
        <ChevronDown className="h-5 w-5 text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50  w-full  border border-t-0 rounded-b-lg border-gray-300 bg-white">
          {accounts.map((account, index) => (
            <div key={account.id}>
              <button
                onClick={() => {
                  onSelect?.(account);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-lg font-medium ${account.color}`}
                  >
                    {account.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-gray-700">
                      {account.name}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {account.balance}
                    </p>
                  </div>
                </div>

                {selectedAccount?.id === account.id && (
                  <Check className="h-6 w-6 text-blue-600" />
                )}
              </button>

              <div className="border-b border-gray-200" />
            </div>
          ))}

          {/* Add new bank */}
          <div className="flex items-center justify-between px-5 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <Plus className="h-5 w-5" />
              <span className="font-medium text-xs text-gray-700">
                Add new bank
              </span>
            </div>
            <span className="text-sm text-gray-500">⌘ +</span>
          </div>
        </div>
      )}
    </div>
  );
}
