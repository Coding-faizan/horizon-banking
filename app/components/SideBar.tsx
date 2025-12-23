'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LogOutIcon, MenuIcon, XIcon, SearchIcon } from 'lucide-react';

import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';

import { Logo } from './Logo';
import { Input } from './ui/Input';
import {
  HomeIcon,
  DollarIcon,
  HistoryIcon,
  DollarSendIcon,
  ConnectCardIcon,
} from './ui/icons';
import { NavLink } from './NavLink';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center gap-3 px-4 h-14">
        <button onClick={() => setOpen(true)}>
          <MenuIcon className="size-6" />
        </button>
        <Logo className="self-center" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed md:static z-50 top-0 left-0 flex flex-col justify-between w-72 min-h-screen border-r border-gray-200 bg-white pt-4 transition-transform',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div>
          <div className="flex items-center justify-between px-4 md:block">
            <button className="md:hidden" onClick={() => setOpen(false)}>
              <XIcon className="size-6" />
            </button>
          </div>
          {!open && <Logo className="pl-4" />}

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
              pathname={pathname}
              icon={
                <HomeIcon
                  size={24}
                  color={pathname === routes.home ? '#fff' : '#667085'}
                />
              }
            />
            <NavLink
              href={routes.banks}
              label="My Banks"
              pathname={pathname}
              icon={
                <DollarIcon
                  size={24}
                  color={pathname === routes.banks ? '#fff' : '#667085'}
                />
              }
            />
            <NavLink
              href={routes.history}
              label="Transactions History"
              pathname={pathname}
              icon={
                <HistoryIcon
                  size={24}
                  color={pathname === routes.history ? '#fff' : '#667085'}
                />
              }
            />
            <NavLink
              href={routes.transfer}
              label="Payment Transfer"
              pathname={pathname}
              icon={
                <DollarSendIcon
                  size={24}
                  color={pathname === routes.transfer ? '#fff' : '#667085'}
                />
              }
            />
            <NavLink
              href={routes.connect}
              label="Connect Bank"
              pathname={pathname}
              icon={
                <ConnectCardIcon
                  size={24}
                  color={pathname === routes.connect ? '#fff' : '#667085'}
                />
              }
            />
          </nav>
        </div>

        <div className="flex items-center gap-3 p-4 border-t border-gray-200">
          <Image
            src="/images/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm">Adrian Hajdin</p>
            <p className="text-sm text-gray-600">adrian@jsmastery.pro</p>
          </div>
          <LogOutIcon
            onClick={() => router.replace(routes.login)}
            className="text-gray-500"
          />
        </div>
      </aside>
    </>
  );
}
