import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';

type NavLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  pathname: string;
};

export const NavLink = ({ href, label, icon, pathname }: NavLinkProps) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 text-gray-700 font-semibold text-base px-3 py-3 rounded-md',
        isActive && 'bg-primary text-white'
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
