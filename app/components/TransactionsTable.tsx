import { cn } from '@/lib/utils';
import { Transaction } from '@/types/types';
import Image from 'next/image';

/**
 * TransactionTable
 *
 * A clean, banking-style transactions table matching the provided design.
 * Tailwind-only, no animation libs.
 */
export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
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
                `border-b last:border-b-0 border-gray-200 `,
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
                      className="rounded-full object-cover"
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

function StatusPill({
  status,
}: {
  status: 'processing' | 'success' | 'declined';
}) {
  const styles = {
    processing: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    declined: 'bg-error-50 text-error-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {capitalize(status)}
    </span>
  );
}

function CategoryPill({
  category,
}: {
  category: 'subscriptions' | 'deposit' | 'income' | 'groceries' | 'food';
}) {
  const colors = {
    subscriptions: 'bg-blue-25 border-blue-600 text-blue-700',
    deposit: 'bg-success-25 border-success-600 text-success-700',
    income: 'bg-success-25 border-success-600 text-success-700',
    groceries: 'bg-indigo-25 border-indigo-500 text-indigo-600',
    food: 'bg-pink-25 border-pink-600 text-pink-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-[1.5px] px-3 py-1 text-sm font-medium ${colors[category]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {capitalize(category)}
    </span>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Example usage:

const transactions = [
  {
    id: 1,
    name: "Spotify",
    amount: -15,
    status: "processing",
    date: "Wed 1:00pm",
    category: "subscriptions",
    avatar: "/spotify.png",
  },
];

<TransactionTable transactions={transactions} />
*/
