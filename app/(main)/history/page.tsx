'use client';

import { BankAccountCard } from '@/app/components/BalanceCard';
import { Pagination } from '@/app/components/Pagination';
import TransactionTable from '@/app/components/TransactionsTable';
import { BankIcon } from '@/app/components/ui/icons/BankIcon';
import { transactions } from '@/mocks/transactions.mocks';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const bankOptions = [
  { label: 'Select Account', value: '' },
  { label: 'Chase Savings - 0910', value: 'chase-savings' },
  { label: 'Bank of America - 5523', value: 'boa-checking' },
  { label: 'Wells Fargo - 8891', value: 'wells-fargo' },
];

export default function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-12 px-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900">
            Transaction history
          </h1>
          <p className="text-gray-600">
            Gain Insights and Track Your Transactions Over Time
          </p>
        </div>

        <div className="relative flex items-center">
          <select className="w-full appearance-none rounded-lg bg-white pl-10 pr-10 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-200">
            {bankOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Left icon */}
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <BankIcon />
          </div>

          {/* Dropdown chevron (inside select) */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <ChevronDown className="h-5 w-5" aria-hidden />
          </div>
        </div>
      </div>

      {/* Bank Account Card */}
      <BankAccountCard />

      {/* Transaction History Content */}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg text-gray-900 font-semibold">
            Transaction History
          </h2>
        </div>

        {/* Transaction Table */}

        <div className="mt-8">
          <TransactionTable
            transactions={transactions.slice(
              (currentPage - 1) * 6,
              currentPage * 6
            )}
          />
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(transactions.length / 6)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
