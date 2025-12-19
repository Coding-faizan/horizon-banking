export type Transaction = {
  id: number;
  name: string;
  amount: number;
  status: 'processing' | 'success' | 'declined';
  date: string;
  category: 'subscriptions' | 'deposit' | 'income' | 'groceries' | 'food';
  avatar?: string;
  initials?: string;
  highlight?: boolean;
};
