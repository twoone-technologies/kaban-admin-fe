'use client';
import { usePathname } from 'next/navigation';
import { BellIcon } from '@/public/icons';
import { Search } from 'lucide-react';

// type Props = {}

export default function Navigation() {
  const path = usePathname();
  const pathName = path.split('/')[2];
  // console.log(pathName.split('/')[2])

  function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="flex w-full p-2 justify-between items-center">
      <span>{pathName ? capitalizeString(pathName) : 'Dashboard'}</span>
      <div className="flex gap-4 items-center">
        <Search className="h-5 w-5" />
        <BellIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
