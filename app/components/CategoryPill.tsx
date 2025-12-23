import { capitalize } from '@/lib/utils';
import { TransactionCategory } from '@/types/types';

export function CategoryPill({ category }: { category: TransactionCategory }) {
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
