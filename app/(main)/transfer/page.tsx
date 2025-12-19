'use client';

import { Divider } from '@/app/components/Divider';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Building2, ChevronDown, MoreVertical } from 'lucide-react';
import { useForm } from 'react-hook-form';

type TransferForm = {
  sourceBank: string;
  note: string;
  email: string;
  accountNumber: string;
  amount: string;
};

const bankOptions = [
  { label: 'Select Account', value: '' },
  { label: 'Chase Savings - 0910', value: 'chase-savings' },
  { label: 'Bank of America - 5523', value: 'boa-checking' },
  { label: 'Wells Fargo - 8891', value: 'wells-fargo' },
];

export default function PaymentTransferPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferForm>({
    defaultValues: {
      sourceBank: '',
      note: 'Dear John,\n\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.',
      email: 'john@gmail.com',
      accountNumber: '',
      amount: '40000',
    },
  });

  const onSubmit = (data: TransferForm) => {
    // Replace with API call/integration when ready
    console.log('Transfer form submitted', data);
  };

  return (
    <main className="bg-gray-25 px-8 py-11">
      <div className="">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Payment Transfer
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Please provide any specific details or notes related to the payment
            transfer
          </p>
        </header>

        <div className="p-6">
          <form
            className="space-y-8 divide-y divide-gray-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Transfer details
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter the details of the recipient
                  </p>
                </div>
                <MoreVertical className="h-5 w-5 text-gray-400" aria-hidden />
              </div>

              <Divider />

              <div className="space-y-6">
                <div className="grid gap-3 sm:grid-cols-3 sm:items-start">
                  <label
                    htmlFor="sourceBank"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Select Source Bank
                    <span className="mt-1 block text-xs font-normal text-gray-600">
                      Select the bank account you want to transfer funds from
                    </span>
                  </label>

                  <div className="sm:col-span-2">
                    <div className="relative">
                      <select
                        id="sourceBank"
                        {...register('sourceBank', {
                          required: 'Please select a source bank',
                        })}
                        className="input-border w-full appearance-none rounded-lg bg-white px-3 py-3 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        {bankOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                        <ChevronDown className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <Building2 className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    {errors.sourceBank && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.sourceBank.message}
                      </p>
                    )}
                  </div>
                </div>

                <Divider />

                <div className="grid gap-3 sm:grid-cols-3 sm:items-start">
                  <label
                    htmlFor="note"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Transfer Note (Optional)
                    <span className="mt-1 block text-xs font-normal text-gray-600">
                      Please provide any additional information or instructions
                      related to the transfer
                    </span>
                  </label>
                  <div className="sm:col-span-2">
                    <textarea
                      id="note"
                      rows={6}
                      {...register('note')}
                      className="input-border w-full rounded-xl bg-white p-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <Divider />
            </section>

            <section className="space-y-6 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Bank account details
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter the bank account details of the recipient
                  </p>
                </div>
                <MoreVertical className="h-5 w-5 text-gray-400" aria-hidden />
              </div>

              <Divider />

              <div className="space-y-6">
                <div className="grid gap-3 sm:grid-cols-3 sm:items-start">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Recipient's Email Address
                  </label>
                  <div className="sm:col-span-2">
                    <Input
                      id="email"
                      type="email"
                      className="w-full"
                      placeholder="john@gmail.com"
                      error={errors.email?.message}
                      {...register('email', { required: 'Email is required' })}
                    />
                  </div>
                </div>

                <Divider />
                <div className="grid gap-3 sm:grid-cols-3 sm:items-start">
                  <label
                    htmlFor="accountNumber"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Recipient's Bank Account Number
                  </label>
                  <div className="sm:col-span-2">
                    <Input
                      id="accountNumber"
                      type="text"
                      className="w-full"
                      placeholder="Enter the account number"
                      error={errors.accountNumber?.message}
                      {...register('accountNumber', {
                        required: 'Account number is required',
                      })}
                    />
                  </div>
                </div>

                <Divider />

                <div className="grid gap-3 sm:grid-cols-3 sm:items-start">
                  <label
                    htmlFor="amount"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="sm:col-span-2">
                    <Input
                      id="amount"
                      type="number"
                      className="w-full"
                      placeholder="40000"
                      error={errors.amount?.message}
                      {...register('amount', {
                        required: 'Amount is required',
                        min: { value: 1, message: 'Amount must be at least 1' },
                      })}
                    />
                  </div>
                </div>
              </div>

              <Divider />
            </section>

            <div className="pt-6">
              <Button type="submit" fullWidth className="h-12 text-base">
                Transfer Funds
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
