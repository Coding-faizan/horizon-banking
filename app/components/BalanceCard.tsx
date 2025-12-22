export function BankAccountCard() {
  return (
    <div className="w-full rounded-xl bg-blue-600 p-6 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Chase</h2>
            <p className="mt-1 text-base text-white/90">
              Chase Growth Savings Account
            </p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <span className="tracking-widest">•••• •••• ••••</span>
            <span className="font-medium">9999</span>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-lg border border-white/40 bg-white/20 p-4  backdrop-blur-sm">
          <p className="text-sm text-white/90 font-medium">Current Balance</p>
          <p className="mt-1 text-2xl font-semibold">$41,382.80</p>
        </div>
      </div>
    </div>
  );
}
