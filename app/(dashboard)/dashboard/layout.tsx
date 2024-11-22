'use client';
import React from 'react';
import Navigation from './_components/Navigation';
import SideBar from './_components/SideBar';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-text flex relative">
      <SideBar />
      <div className='w-full'>
        <Navigation />
        {children}
      </div>
    </div>
  );
}

export default layout;
