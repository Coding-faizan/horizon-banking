import { Copy, Nfc } from 'lucide-react';
import Image from 'next/image';
import { BankCardLines } from './BankCardLines';
import { ProgressBar } from './ProgressBar';

export interface BankCardProps {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: 'visa' | 'mastercard';
  variant: 'blue' | 'purple';
  isCopyable?: boolean;
  spendingLimit?: number;
  spendingUsed?: number;
}

export const BankCard = ({
  bankName,
  cardNumber,
  cardHolder,
  expiryDate,
  cardType,
  variant,
  isCopyable = false,
  spendingLimit,
  spendingUsed,
}: BankCardProps) => {
  const variantClasses = {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
    purple: 'bg-gradient-to-r from-purple-600 to-purple-600',
  };

  const progressStyles = {
    blue: { progressFillColor: 'bg-primary' },
    purple: { progressFillColor: 'bg-purple-600' },
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative w-80 h-48 p-5 rounded-3xl text-white ${variantClasses[variant]}`}
      >
        <BankCardLines />
        <p className="absolute top-5 left-5 text-base font-medium">
          {bankName}
        </p>

        <p className="absolute top-32 left-4 text-xs font-semibold font-manrope">
          {cardHolder.toUpperCase()}
        </p>
        <p className="absolute top-32 left-42 text-xs font-semibold font-manrope">
          {expiryDate}
        </p>

        <p className="absolute top-38 left-4 text-base font-semibold font-manrope">
          {cardNumber}
        </p>

        {isCopyable ? (
          <div className="absolute top-5 right-5 bg-white/30 flex justify-center items-center p-1.5 rounded-sm cursor-pointer">
            <Copy className="size-3" />
          </div>
        ) : (
          <Nfc className="absolute top-5 right-5 size-6" />
        )}

        <div className="absolute top-36 right-5 flex justify-center items-center bg-white/10 p-2 rounded-sm">
          <Image
            src={`/images/${cardType}.png`}
            alt="Card Chip"
            width={cardType === 'visa' ? 32 : 28}
            height={cardType === 'visa' ? 12 : 18}
          />
        </div>
      </div>

      {spendingLimit && spendingUsed !== undefined && (
        <div className="space-y-2 px-1">
          <div className="flex justify-between">
            <p className="text-gray-700 font-medium">Spending this month</p>
            <p className="text-gray-600 text-sm">${spendingUsed}</p>
          </div>
          <ProgressBar
            progress={(spendingUsed / spendingLimit) * 100}
            progressBgColor="bg-gray-200"
            progressFillColor={progressStyles[variant].progressFillColor}
          />
        </div>
      )}
    </div>
  );
};
