import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-1 items-center', className)}>
      <Image src="/images/logo.png" alt={'Logo'} width={33} height={33} />
      <span className="text-4xl font-logo font-bold">Horizon</span>
    </div>
  );
};
