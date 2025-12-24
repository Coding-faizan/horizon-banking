export type Transaction = {
  id: number;
  name: string;
  amount: number;
  status: TransactionStatus;
  date: string;
  category: TransactionCategory;
  avatar?: string;
  initials?: string;
  highlight?: boolean;
};

export type TransactionStatus = 'processing' | 'success' | 'declined';

export type Variant = 'blue' | 'success' | 'pink';

export type Account = {
  id: number;
  name: string;
  balance: string;
  initials: string;
  color: string;
};

export type TBankCard = {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: 'visa' | 'mastercard';
  variant: 'blue' | 'purple';
  isCopyable?: boolean;
  spendingLimit?: number;
  spendingUsed?: number;
  balance?: number;
};

export type TransactionCategory =
  | 'subscriptions'
  | 'deposit'
  | 'income'
  | 'groceries'
  | 'food';
