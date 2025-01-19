'use client';
import { usePathname } from 'next/navigation';
import { BellIcon } from '@/public/icons';
import { Search } from 'lucide-react';
import { SquareMenu } from 'lucide-react';

export default function Navigation({
  onClick,
  isMobile,
}: {
  onClick: () => void;
  isMobile: boolean;
}) {
  const path = usePathname();
  const pathName = path.split('/')[2];

  function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div
      className={`border-b flex w-full p-2 justify-between sticky  z-50 top-0 items-center border-accent bg-background`}
    >
      <span>{pathName ? capitalizeString(pathName) : 'Dashboard'}</span>
      {isMobile ? (
        <div className="" onClick={onClick}>
          <SquareMenu />
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <Search className="h-5 w-5" />
          <BellIcon className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
