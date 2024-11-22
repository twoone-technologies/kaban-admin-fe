'use client';
// import { logoutIcon } from "@/public/assets/icons";
// import { IsCollapsedProps } from "@/types";
import { ChevronLeft, X } from 'lucide-react';
import Image from 'next/image';
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

export interface IsCollapsedProps {
  isCollapsed?: boolean;
  setIsCollapsed?: (value: boolean | ((prevState: boolean) => boolean)) => void;
  showSidebar?: boolean;
  setShowSidebar?: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

function SideBar({
  isCollapsed,
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

  const handleSetShowSidebar = () => {
    if (setShowSidebar) setShowSidebar((prevState: boolean) => !prevState);
  };

  return (
    <>
      <aside
        className={`hidden md:flex flex-col sticky top-0 h-screen border-accent border-r-2 px-2 py-2 transition-all duration-300
        ${isCollapsed ? 'w-[80px]' : 'w-[330px]'}`}
      >
        <div
          className={`${
            !isCollapsed
              ? 'bg-[url(/ng-election-logo-2.png)] w-[145px] h-[100px]'
              : 'bg-[url(/ng-election-logo-4.svg)] w-[60px] h-[60px]'
          } flex gap-1 text-2xl font-bold items-baseline text-white transition-all duration-300`}
        >
          <LogoIcon className="relative  top-[6px] w-[3rem] h-[3rem]" />
          Kaban
        </div>
        <div className="flex flex-col w-full justify-between h-full">
          <div className="mt-10 w-full px-2">
            <div
              className={`flex ${
                isCollapsed && 'flex-col-reverse gap-2'
              } w-full justify-between items-center text-sm font-medium`}
            >
              MENU
              <div className="size-5 flex items-center justify-center bg-lightGreen rounded-md hover:bg-lightGreen/80">
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
                  <div className='hover:text-red-500'>{item.icon1}</div>
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <ProfileCard className="w-full relative  px-2" role={'admin'} name={'sprite can'} />
        </div>
      </aside>

      {showSidebar && (
        <aside
          className={` flex md:hidden flex-col items-center top-0 h-screen bg-primary px-2 py-6 transition-all duration-300 w-full z-50`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="bg-[url(/ng-election-logo-2.png)] w-[145px] h-[100px] bg-contain bg-no-repeat bg-center"></div>
            <button onClick={handleSetShowSidebar}>
              <X color="white" size={24} />
            </button>
          </div>
          <div className="flex flex-col w-full justify-between h-full">
            <div className="mt-10 w-full px-2">
              <div className="flex w-full justify-between items-center text-[#A5E2AC] text-sm font-medium">
                Menu
              </div>
              <div className="mt-5 flex flex-col gap-5">
                {sideBarContent.map((item) => (
                  <Link
                    href={item.path}
                    className={`group flex items-center gap-2 px-4 py-3 font-medium border-[0.4px] border-[#A5E2AC] rounded-[16px] hover:text-primary hover:bg-white hover:border-none transition-all duration-300 ${
                      isActiveBar(item.path)
                        ? 'bg-white border-none text-primary'
                        : 'text-white'
                    }`}
                    key={item.id}
                    title={item.name}
                    onClick={handleSetShowSidebar} // Close the sidebar when clicking on an item
                  >
                    <Image
                      src={
                        isActiveBar(item.path) ? item.icon2 : `${item.icon1}`
                      }
                      height={16}
                      width={16}
                      alt=""
                      className="group-hover:hidden"
                    />
                    <Image
                      src={item.icon2}
                      width={16}
                      height={16}
                      alt=""
                      className="hidden group-hover:inline"
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full px-2">
              <Link
                href={'#'}
                className={`flex items-center gap-2 px-4 py-3 text-white font-medium hover:text-white/80`}
                title="Logout"
                onClick={handleSetShowSidebar}
              >
                {/* <Svg width={'16px'} height={'16px'} SvgIcon={logoutIcon} /> */}
                <span className="text-sm font-medium">Logout</span>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default SideBar;
