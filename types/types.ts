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

export type Variant = 'blue' | 'success' | 'pink';

export type Account = {
  id: number;
  name: string;
  balance: string;
  initials: string;
  color: string;
};
