import { cn } from '@/lib/utils';

export const ProgressBar = ({
  progress,
  progressBgColor = 'bg-gray-200',
  progressFillColor = 'bg-blue-700',
}: {
  progress: number;
  progressBgColor?: string;
  progressFillColor?: string;
}) => {
  return (
    <div
      className={cn(`w-full h-2 rounded-full overflow-hidden`, progressBgColor)}
    >
      <div
        className={cn(`h-2 rounded-full`, progressFillColor)}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
