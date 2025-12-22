'use client';

import AccountSelect from '@/app/components/AccountSelect';
import { Divider } from '@/app/components/Divider';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { TransferForm, transferSchema } from '@/lib/schemas/validationSchemas';
import { Account } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function PaymentTransferPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<TransferForm>({
    resolver: zodResolver(transferSchema),
    mode: 'onBlur',
  });

  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
    undefined
  );

  const onSubmit = (data: TransferForm) => {
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
                <div className="flex flex-col lg:flex-row gap-3">
                  <label
                    htmlFor="sourceBank"
                    className="text-sm font-semibold text-gray-900 flex-1"
                  >
                    Select Source Bank
                    <span className="mt-1 block text-xs font-normal text-gray-600">
                      Select the bank account you want to transfer funds from
                    </span>
                  </label>

                  <div className="w-full flex-2">
                    <Controller
                      control={control}
                      name="sourceBank"
                      render={({ field: { onChange } }) => (
                        <AccountSelect
                          className="max-w-lg"
                          selectedAccount={selectedAccount}
                          onSelect={(account) => {
                            setSelectedAccount(account);
                            onChange(account.name);
                          }}
                        />
                      )}
                    />

                    {errors.sourceBank && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.sourceBank.message}
                      </p>
                    )}
                  </div>
                </div>

                <Divider />

                <div className="flex flex-col lg:flex-row gap-3">
                  <label
                    htmlFor="note"
                    className="text-sm font-semibold text-gray-900 flex-1"
                  >
                    Transfer Note (Optional)
                    <span className="mt-1 block text-xs font-normal text-gray-600">
                      Please provide any additional information or instructions
                      related to the transfer
                    </span>
                  </label>
                  <div className="w-full flex-2">
                    <textarea
                      id="note"
                      rows={6}
                      {...register('note')}
                      className="input-border w-full max-w-lg rounded-xl bg-white p-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                <div className="flex flex-col lg:flex-row gap-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900 flex-1"
                  >
                    Recipient's Email Address
                  </label>
                  <div className="w-full flex-2">
                    <Input
                      placeholder="john@gmail.com"
                      type="email"
                      {...register('email')}
                      error={errors.email?.message}
                    />
                  </div>
                </div>

                <Divider />
                <div className="flex flex-col lg:flex-row gap-3">
                  <label
                    htmlFor="accountNumber"
                    className="text-sm font-semibold text-gray-900 flex-1"
                  >
                    Recipient's Bank Account Number
                  </label>
                  <div className="w-full flex-2">
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

                <div className="flex flex-col lg:flex-row gap-3">
                  <label
                    htmlFor="amount"
                    className="text-sm font-semibold text-gray-900 flex-1"
                  >
                    Amount
                  </label>
                  <div className="w-full flex-2">
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

            <div className="pt-6 max-w-4xl">
              <Button
                disabled={
                  !watch('email') ||
                  !watch('accountNumber') ||
                  !watch('amount') ||
                  !watch('sourceBank')
                }
                type="submit"
                fullWidth
                className="h-12 text-base"
              >
                Transfer Funds
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
