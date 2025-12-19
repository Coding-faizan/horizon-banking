import { Nfc } from 'lucide-react';
import Image from 'next/image';
import { BankCardLines } from './BankCardLines';

interface BankCardProps {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: 'visa' | 'mastercard';
  variant: 'blue' | 'purple' | 'gray';
}

export const BankCard = ({
  bankName,
  cardNumber,
  cardHolder,
  expiryDate,
  cardType,
  variant,
}: BankCardProps) => {
  return (
    <div className="relative w-80 h-48 p-5 rounded-3xl text-white bg-primary">
      <BankCardLines />
      <p className="absolute top-5 left-5 text-base font-medium">{bankName}</p>

      <p className="absolute top-32 left-4 text-xs font-semibold font-manrope">
        {cardHolder.toUpperCase()}
      </p>
      <p className="absolute top-32 left-42 text-xs font-semibold font-manrope">
        {expiryDate}
      </p>

      <p className="absolute top-38 left-4 text-base font-semibold font-manrope">
        {cardNumber}
      </p>

      <Nfc className="absolute top-5 right-5 size-6" />

      <div className="absolute top-36 right-5 flex justify-center items-center bg-white/10 p-2 rounded-sm">
        <Image
          src={`/images/${cardType}.png`}
          alt="Card Chip"
          width={cardType === 'visa' ? 32 : 28}
          height={cardType === 'visa' ? 12 : 18}
        />
      </div>
    </div>
  );
};
