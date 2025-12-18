'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Logo } from './Logo';
import { Input } from './ui/Input';
import { LogOutIcon, SearchIcon } from 'lucide-react';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { HomeIcon } from './ui/icons/HomeIcon';
import { DollarIcon } from './ui/icons/DolllarIcon';
import { HistoryIcon } from './ui/icons/HistoryIcon';
import { DollarSendIcon } from './ui/icons/DollarSendIcon';
import { ConnectCardIcon } from './ui/icons/ConnectCardIcon';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col justify-between w-72 min-h-screen border-r border-gray-200 pt-4">
      <div>
        <Logo className="pl-4" />
        <div className="p-4">
          <Input
            type="text"
            placeholder="Search"
            icon={<SearchIcon className="size-5 text-gray-400" />}
          />
        </div>
        <nav className="px-4 space-y-1">
          <NavLink
            href={routes.home}
            label="Home"
            icon={
              <HomeIcon
                size={24}
                color={cn(pathname === routes.home ? '#fff' : '#667085')}
              />
            }
          />
          <NavLink
            href={routes.banks}
            label="My Banks"
            icon={
              <DollarIcon
                size={24}
                color={cn(pathname === routes.banks ? '#fff' : '#667085')}
              />
            }
          />
          <NavLink
            href={routes.history}
            label="Transactions History"
            icon={
              <HistoryIcon
                size={24}
                color={cn(pathname === routes.history ? '#fff' : '#667085')}
              />
            }
          />
          <NavLink
            href={routes.transfer}
            label="Payment Transfer"
            icon={
              <DollarSendIcon
                size={24}
                color={cn(pathname === routes.transfer ? '#fff' : '#667085')}
              />
            }
          />
          <NavLink
            href={routes.connect}
            label="Connect Bank"
            icon={
              <ConnectCardIcon
                size={24}
                color={cn(pathname === routes.connect ? '#fff' : '#667085')}
              />
            }
          />
        </nav>
      </div>
      <div className="flex items-center gap-3 pl-2 pb-3 pt-6 border-t border-gray-200 my-4 mx-4">
        <Image
          src="/images/avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
        />
        <div>
          <p className="font-semibold text-sm">Adrian Hajdin</p>
          <p className="text-sm text-gray-600">adrian@jsmastery.pro</p>
        </div>
        <LogOutIcon className="text-gray-500" />
      </div>
    </aside>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const NavLink = ({ href, label, icon }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-1.5 text-gray-700 font-semibold text-base px-3 py-4 rounded-md',
        isActive && 'bg-primary text-white'
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
