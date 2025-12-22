import { Monitor, Handbag, CoinsIcon } from 'lucide-react';

export const budgets = [
  {
    title: 'Subscriptions',
    amountLeft: '$25 left',
    progress: 60,
    icon: Monitor,
    variant: 'blue',
  },
  {
    title: 'Food and booze',
    amountLeft: '$150 left',
    progress: 40,
    icon: Handbag,
    variant: 'pink',
  },
  {
    title: 'Savings',
    amountLeft: '$500 left',
    progress: 80,
    icon: CoinsIcon,
    variant: 'success',
  },
];
