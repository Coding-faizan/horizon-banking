'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LogOutIcon, MenuIcon, XIcon, SearchIcon } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
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
              href={ROUTES.home}
              label="Home"
              pathname={pathname}
              icon={
                <HomeIcon
                  color={pathname === ROUTES.home ? '#fff' : '#667085'}
                  className="size-6"
                />
              }
            />
            <NavLink
              href={ROUTES.banks}
              label="My Banks"
              pathname={pathname}
              icon={
                <DollarIcon
                  color={pathname === ROUTES.banks ? '#fff' : '#667085'}
                  className="size-6"
                />
              }
            />
            <NavLink
              href={ROUTES.history}
              label="Transactions History"
              pathname={pathname}
              icon={
                <HistoryIcon
                  color={pathname === ROUTES.history ? '#fff' : '#667085'}
                  className="size-6"
                />
              }
            />
            <NavLink
              href={ROUTES.transfer}
              label="Payment Transfer"
              pathname={pathname}
              icon={
                <DollarSendIcon
                  color={pathname === ROUTES.transfer ? '#fff' : '#667085'}
                  className="size-6"
                />
              }
            />
            <NavLink
              href={ROUTES.connect}
              label="Connect Bank"
              pathname={pathname}
              icon={
                <ConnectCardIcon
                  color={pathname === ROUTES.connect ? '#fff' : '#667085'}
                  className="size-6"
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
            onClick={() => router.replace(ROUTES.login)}
            className="text-gray-500"
          />
        </div>
      </aside>
    </>
  );
}
