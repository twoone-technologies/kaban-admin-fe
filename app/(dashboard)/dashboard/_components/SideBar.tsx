'use client';
import { BellIcon, ChevronLeft, Search } from 'lucide-react';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardIcon,
  InboxIcon,
  ListingsIcon,
  LogoIcon,
  PostIcon,
  RealtorsIcon,
  ReportIcon,
} from '@/public/icons';
import ProfileCard from './ProfileCard';
// import Image from 'next/image';

export interface IsCollapsedProps {
  isCollapsed?: boolean;
  setIsCollapsed?: (value: boolean | ((prevState: boolean) => boolean)) => void;
  showSidebar?: boolean;
  isMobile?: boolean;
  setShowSidebar?: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

function SideBar({
  isCollapsed,
  // isMobile,
  setIsCollapsed,
  showSidebar,
  setShowSidebar,
}: IsCollapsedProps) {
  const sideBarContent = [
    {
      id: 1,
      name: 'Dashboard',
      icon1: <DashboardIcon />,
      icon2: '/assets/icons/house-icon-green.svg',
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Realtors',
      icon1: <RealtorsIcon />,
      icon2: '/assets/icons/puzzle-icon-green.svg',
      path: '/dashboard/realtors',
    },
    {
      id: 3,
      name: 'Listings',
      icon1: <ListingsIcon />,
      icon2: '/assets/icons/piechart-icon-green.svg',
      path: '/dashboard/listings',
    },
    {
      id: 4,
      name: 'Report',
      icon1: <ReportIcon />,
      icon2: '/assets/icons/chat-icon-green.svg',
      path: '/dashboard/report',
    },
    {
      id: 5,
      name: 'Post',
      icon1: <PostIcon />,
      icon2: '/assets/icons/paper-green.svg',
      path: '/dashboard/posts',
    },
    {
      id: 6,
      name: 'Inbox',
      icon1: <InboxIcon />,
      icon2: '/assets/icons/paper-green.svg',
      path: '/dashboard/inbox',
    },
  ];

  const pathname = usePathname();

  function isActiveBar(path: string) {
    return pathname === path;
  }

  const toggleCollapse = () => {
    if (setIsCollapsed) setIsCollapsed(!isCollapsed);
  };

  // const handleSetShowSidebar = () => {
  //   if (setShowSidebar) setShowSidebar((prevState: boolean) => !prevState);
  // };

  return (
    <>
      <aside
        className={`hidden md:flex flex-col md:sticky top-0 h-screen border-accent border-r-2 px-2 py-2 transition-all duration-300
        ${isCollapsed ? 'w-[80px]' : 'w-[330px]'}`}
      >
        <button
          onClick={() => setShowSidebar && setShowSidebar((prev) => !prev)}
        ></button>
        <div
          className={`${
            !isCollapsed
              ? 'w-[145px] h-[100px]'
              : 'w-[60px] h-[60px]'
          } flex gap-1 text-2xl font-bold justify-center items-baseline text-white transition-all duration-300`}
        >
          <LogoIcon className="relative  top-[6px] w-[3rem] h-[3rem]" />
          <span className={isCollapsed ? 'hidden' : ''}>Kaban</span>
        </div>
        <div className="flex flex-col w-full justify-between h-full">
          <div className="mt-10 w-full px-2">
            <div
              className={`flex ${
                isCollapsed && 'flex-col-reverse gap-2'
              } w-full justify-between items-center text-sm font-medium`}
            >
              MENU
              <div className="flex items-center justify-center rounded-md">
                <button onClick={toggleCollapse}>
                  <ChevronLeft
                    color="white"
                    size={16}
                    className={`${
                      isCollapsed ? 'rotate-180' : ''
                    } transition-all duration-300`}
                  />
                </button>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              {sideBarContent.map((item) => (
                <Link
                  href={item.path}
                  className={`group flex items-center gap-2 px-4 py-3 font-medium rounded-md text-text hover:text-text-active hover:bg-accent-foreground transition-all duration-300 ${
                    isActiveBar(item.path)
                      ? 'text-text-active bg-accent-foreground'
                      : 'text-text'
                  }`}
                  key={item.id}
                  title={item.name}
                >
                  <div>{item.icon1}</div>
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <ProfileCard
            isCollapsed={isCollapsed}
            className="w-full relative px-2"
            role={'admin'}
            name={'sprite can'}
          />
        </div>
      </aside>

      {showSidebar && (
        <aside
          className={`flex md:hidden flex-col absolute bg-background items-center top-0 h-screen px-2 py-2 transition-all duration-300 w-full z-50`}
        >
          <div className="flex justify-between items-center w-full">
            <div
              className={`flex gap-1 text-2xl font-bold items-baseline text-white transition-all duration-300`}
            >
              <LogoIcon className="relative  top-[6px] w-[3rem] h-[3rem]" />
              Kaban
            </div>
          </div>
          <div className="flex flex-col w-full justify-between h-full">
            <div className="mt-10 w-full px-2">
              <div className="flex w-full justify-between items-center text-sm font-medium">
                Menu
                <div className="flex gap-4 items-center">
                  <Search className="h-5 w-5" />
                  <BellIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                {sideBarContent.map((item) => (
                  <Link
                    href={item.path}
                    className={`group flex items-center gap-2 px-4 py-3 font-medium rounded-md text-text hover:text-text-active hover:bg-accent-foreground transition-all duration-300 ${
                      isActiveBar(item.path)
                        ? 'text-text-active bg-accent-foreground'
                        : 'text-text'
                    }`}
                    key={item.id}
                    title={item.name}
                  >
                    <div className="hover:text-red-500">{item.icon1}</div>
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{item.name}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <ProfileCard
              className="w-full relative  px-2"
              role={'admin'}
              name={'sprite can'}
            />
          </div>
        </aside>
      )}
    </>
  );
}

export default SideBar;
