import { cn } from '@/lib/utils';
import { Variant } from '@/types/types';
import { LucideIcon } from 'lucide-react';

const VARIANTS: Record<
  Variant,
  {
    cardBg: string;
    iconBg: string;
    iconText: string;
    titleText: string;
    amountText: string;
    progressBg: string;
    progressFill: string;
  }
> = {
  blue: {
    cardBg: 'bg-blue-25',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-700',
    titleText: 'text-blue-900',
    amountText: 'text-blue-700',
    progressBg: 'bg-blue-100',
    progressFill: 'bg-blue-700',
  },
  success: {
    cardBg: 'bg-success-25',
    iconBg: 'bg-success-100',
    iconText: 'text-success-700',
    titleText: 'text-success-900',
    amountText: 'text-success-700',
    progressBg: 'bg-success-100',
    progressFill: 'bg-success-700',
  },
  pink: {
    cardBg: 'bg-pink-25',
    iconBg: 'bg-pink-100',
    iconText: 'text-pink-700',
    titleText: 'text-pink-900',
    amountText: 'text-pink-700',
    progressBg: 'bg-pink-100',
    progressFill: 'bg-pink-700',
  },
} as const;

interface BudgetCardProps {
  title: string;
  amountLeft: string;
  progress: number;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: Variant;
}

export function BudgetCard({
  title,
  amountLeft,
  progress,
  icon: Icon,
  variant = 'blue',
}: BudgetCardProps) {
  const colors = VARIANTS[variant];

  return (
    <div className={cn('flex gap-4 rounded-xl p-4', colors.cardBg)}>
      <div
        className={cn(
          'flex size-10 items-center justify-center rounded-full',
          colors.iconBg
        )}
      >
        <Icon className={cn('size-5', colors.iconText)} />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className={cn('text-sm font-medium', colors.titleText)}>{title}</p>
          <p className={cn('text-sm font-semibold', colors.amountText)}>
            {amountLeft}
          </p>
        </div>

        <div className={cn('h-2 w-full rounded-full', colors.progressBg)}>
          <div
            className={cn(
              `h-2 rounded-full transition-all w-[${progress}%]`,
              colors.progressFill
            )}
          />
        </div>
      </div>
    </div>
  );
}
