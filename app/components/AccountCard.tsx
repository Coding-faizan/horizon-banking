export function AccountCard({
  name,
  balance,
  type,
  initials,
}: {
  name: string;
  balance: number;
  type: string;
  initials: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-blue-25 px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
          {initials}
        </div>
        <div>
          <div className="text-xl font-semibold text-blue-900">{name}</div>
          <div className="text-2xl font-bold text-blue-700">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <span className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-success-700">
        {type}
      </span>
    </div>
  );
}
