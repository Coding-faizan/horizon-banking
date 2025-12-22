import { AccountCard } from '@/app/components/AccountCard';
import { BankCard } from '@/app/components/BankCard';
import { BudgetCard } from '@/app/components/BudgetCard';
import { DoughnutChart } from '@/app/components/DoughnutChart';
import TransactionsTable from '@/app/components/TransactionsTable';
import { CoinsIcon } from '@/app/components/ui/icons/CoinsIcon';
import TabBar from '@/app/components/ui/TabBar';
import { transactions } from '@/mocks/transactions.mocks';
import { Handbag, Monitor, MoreVerticalIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const banks = [
    { id: 'chaseBank', label: 'Chase Bank' },
    { id: 'bankOfAmerica', label: 'Bank of America' },
    { id: 'firstPlatypusBank', label: 'First Platypus Bank' },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col gap-8 py-12 px-8">
        {/* Welcome section */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-semibold text-gray-900">
            Welcome,{' '}
            <span className="text-primary font-semibold text-3xl">Adrian</span>
          </p>
          <p className="text-gray-600 text-base">
            Access & manage your account and transactions efficiently.
          </p>
        </div>

        {/* Accounts Cards */}
        <div className="flex gap-5 p-6 border border-gray-200 rounded-lg">
          <div className="w-full max-w-30">
            <DoughnutChart
              data={[12, 12, 13]}
              backgroundColor={['#0179FE', '#4893FF', '#E9F2FF']}
            />
          </div>

          <div className="space-y-8 w-full flex-2">
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-semibold text-gray-900">
                2 Bank accounts
              </p>

              <div className="flex justify-between">
                <PlusIcon className="size-5 text-blue-500" />
                <p className="font-semibold text-sm text-primary">Add bank</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-600 font-medium">
                Total Current Balance
              </p>
              <p className="text-lg font-semibold text-gray-900">$2,698.12</p>
            </div>
          </div>
        </div>

        {/* Recent Transaction */}
        <div className="border-b border-gray-200 space-y-5 w-full">
          <p className="font-semibold text-2xl text-gray-900">
            Recent Transactions
          </p>
          <TabBar tabs={banks} />
          <AccountCard
            name={'Chase Bank'}
            balance={0}
            type={'savings'}
            initials={'CB'}
          />
          <TransactionsTable transactions={transactions.slice(0, 6)} />
        </div>
      </div>
      {/* Profile Section */}
      <div className="relative w-sm border-l border-gray-200 h-screen pl-2 md:pl-0">
        <div className="w-full h-32 relative">
          <Image
            src="/images/profile-gradient.png"
            alt="Profile Gradient"
            fill
          />
        </div>
        <div className="absolute left-4 top-22 w-24 h-24 rounded-full p-1 shadow-lg bg-white">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            fill
            className="rounded-full"
          />
        </div>
        <div className="space-y-8">
          <div className="pt-20 pl-5">
            <p className="font-semibold text-2xl text-gray-900">
              Adrian Hajdin
            </p>
            <p className="text-base text-gray-600">adrian@jsmastery.pro</p>
          </div>
          <div className="px-6 space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold text-lg text-gray-900">My Banks</p>
              <span className="flex gap-2">
                <PlusIcon className="size-5 text-gray-600" />
                <p className="font-semibold text-sm text-gray-600">Add bank</p>
              </span>
            </div>

            <BankCard
              bankName={'Horizon Banking'}
              cardNumber={'1234 1234 1234 1234'}
              cardHolder={'Faizan Ahmad'}
              expiryDate={'05/24'}
              cardType={'visa'}
              variant={'blue'}
            />
          </div>

          {/* My budgets Section */}
          <div className="px-6 space-y-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between">
              <p className="font-semibold text-lg text-gray-900">My budgets</p>
              <MoreVerticalIcon className="text-gray-400" />
            </div>

            <BudgetCard
              title="Subscriptions"
              amountLeft="$25 left"
              progress={60}
              icon={Monitor}
              variant="blue"
            />
            <BudgetCard
              title="Food and booze"
              amountLeft="$150 left"
              progress={40}
              icon={Handbag}
              variant="pink"
            />
            <BudgetCard
              title="Savings"
              amountLeft="$500 left"
              progress={80}
              icon={CoinsIcon}
              variant="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
