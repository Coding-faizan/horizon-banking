import { BankCard } from '@/app/components/BankCard';
import { DUMMY_BANK_CARDS } from '@/mocks/banks.mocks';

export default function BanksPage() {
  return (
    <div className="py-12 px-3 sm:px-6 flex flex-col gap-8">
      <div className="pl-2 space-y-4">
        <h1 className="text-3xl font-bold space-y-5">My Banks Accounts</h1>
        <p className="text-gray-600 text-base">
          Effortlessly Manage Your Banking Activities.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center sm:justify-start">
        {DUMMY_BANK_CARDS.map((card, index) => (
          <BankCard key={index} {...card} isCopyable={true} />
        ))}
      </div>
    </div>
  );
}
