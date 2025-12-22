'use client';

import { useState } from 'react';
import { ChevronDown, Check, Plus, BanIcon } from 'lucide-react';
import { BankIcon } from './ui/icons/BankIcon';

const accounts = [
  {
    id: 1,
    name: 'Bank of America',
    balance: '$2,588.12',
    initials: 'BA',
    color: 'bg-purple-500',
  },
  {
    id: 2,
    name: 'Chase Growth Savings Account',
    balance: '$2,588.12',
    initials: 'CG',
    color: 'bg-blue-600',
  },
  {
    id: 3,
    name: 'First Platypus Bank',
    balance: '$2,588.12',
    initials: 'FB',
    color: 'bg-green-600',
  },
];

export default function AccountSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(accounts[1]);

  return (
    <div className="relative w-full">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-xs text-left"
      >
        <div className="flex items-center gap-3">
          <BankIcon />
          <span className="text-base font-medium text-gray-800">
            {selected ? selected.name : 'Select Account'}
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
                  setSelected(account);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white text-lg font-medium ${account.color}`}
                  >
                    {account.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-gray-800">
                      {account.name}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      {account.balance}
                    </p>
                  </div>
                </div>

                {selected.id === account.id && (
                  <Check className="h-6 w-6 text-blue-600" />
                )}
              </button>

              {index !== accounts.length - 1 && (
                <div className="mx-5 border-t border-gray-200" />
              )}
            </div>
          ))}

          {/* Add new bank */}
          <div className="flex items-center justify-between px-5 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <Plus className="h-5 w-5" />
              <span className="font-medium">Add new bank</span>
            </div>
            <span className="text-sm">⌘ +</span>
          </div>
        </div>
      )}
    </div>
  );
}
