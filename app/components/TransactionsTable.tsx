import { cn } from '@/lib/utils';
import { Transaction } from '@/types/types';
import Image from 'next/image';
import { CategoryPill } from './CategoryPill';
import { StatusPill } from './StatusPill';

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="overflow-scroll rounded-lg bg-white">
      <table className="w-full">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr className="text-left text-xs font-medium text-gray-600">
            <th className="px-6 py-4">Transaction</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className={cn(
                'border-b last:border-b-0 border-gray-200',
                tx.status === 'declined' && 'bg-error-25',
                tx.status === 'success' && 'bg-success-25',
                tx.status === 'processing' && 'bg-white'
              )}
            >
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  {tx.avatar ? (
                    <Image
                      src={tx.avatar}
                      alt={tx.name}
                      height={40}
                      width={40}
                      className="rounded-full object-contain"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                      {tx.initials}
                    </div>
                  )}
                  <span className="font-medium text-foreground">{tx.name}</span>
                </div>
              </td>

              <td
                className={cn(
                  `px-6 py-5 font-medium`,
                  tx.amount > 0 ? 'text-success-600' : 'text-red-500'
                )}
              >
                {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
              </td>

              <td className="px-6 py-5">
                <StatusPill status={tx.status} />
              </td>

              <td className="px-6 py-5 text-sm text-gray-600">{tx.date}</td>

              <td className="px-6 py-5">
                <CategoryPill category={tx.category} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
