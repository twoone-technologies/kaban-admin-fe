'use client';
import React, { useState } from 'react';
import Navigation from './_components/Navigation';
import SideBar from './_components/SideBar';
import useWindowWidth from '@/hooks/useWindowWidth';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isMobile } = useWindowWidth({setCloseState: setShowSidebar});

  return (
    <div className="text-text flex relative">
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
      <div className='w-full'>
        <Navigation onClick={() => setShowSidebar(prev => !prev)} isMobile={isMobile} />
        {children}
      </div>
    </div>
  );
}

