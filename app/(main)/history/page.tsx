'use client';

import AccountSelect from '@/app/components/AccountSelect';
import { BankAccountCard } from '@/app/components/BalanceCard';
import { Pagination } from '@/app/components/Pagination';
import TransactionTable from '@/app/components/TransactionsTable';
import { transactions } from '@/mocks/transactions.mocks';
import { Account } from '@/types/types';
import { useState } from 'react';

export default function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
    undefined
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-12 px-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900">
            Transaction history
          </h1>
          <p className="text-gray-600">
            Gain Insights and Track Your Transactions Over Time
          </p>
        </div>

        <div className="max-w-82 w-full">
          <AccountSelect
            selectedAccount={selectedAccount}
            onSelect={setSelectedAccount}
          />
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
