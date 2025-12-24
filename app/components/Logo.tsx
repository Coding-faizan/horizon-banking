import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-1 items-center', className)}>
      <div className="relative h-8 w-8">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          fill
          sizes="32px"
          className="object-contain"
        />
      </div>

      <span className="text-4xl font-logo font-bold">Horizon</span>
    </div>
  );
};
