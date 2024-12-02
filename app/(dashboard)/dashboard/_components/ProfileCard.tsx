'use client';
import { DashboardIcon, UserIcon } from '@/public/icons';
import avatar from '@/public/icons/avatar.png';
import Image from 'next/image';
import { useState } from 'react';

type AgentProps = {
  src?: string | undefined | null;
  name?: string | null;
  role?: string | null;
  isCollapsed?: boolean;
  star?: number | null;
  onClick?: React.ChangeEventHandler<HTMLDivElement> &
    React.MouseEventHandler<HTMLDivElement>;
} & React.ComponentProps<'div'>;

export default function ProfileCard({
  name,
  role,
  onClick,
  className,
  isCollapsed,
  ...props
}: AgentProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={(e) => {
        setOpen(!open);
        if (onClick) onClick(e);
      }}
      {...props}
      className={`cursor-pointer relative flex gap-4 f-width align-y px-3 py-3 ${className}`}
    >
      <div className={`rounded-full border overflow-hidden ${isCollapsed ? 'h-9 w-9' : 'h-14 w-14'}`}>
        <Image src={avatar} height={90} className={''} alt={'img'} />
      </div>
      <div className={`flex flex-col ${isCollapsed && 'hidden'}`}>
        <span className={`text-base`}>{name}</span>
        <span className={`text-base`}>{role}</span>
      </div>
      <div className={`fixed max-w-max left-2 bottom-24 flex w-full transition-all bg-accent-foreground flex-col border border-accent rounded-lg
        ${open ? 'block' : 'hidden'}
        `}>
        <div className="flex items-center rounded-lg gap-2 hover:bg-background p-3">
          <UserIcon />
          <span>Users</span>
        </div>
        <div className="flex items-center rounded-lg gap-2 hover:bg-background p-3">
          <DashboardIcon />
          <span>Role Management</span>
        </div>
      </div>
    </div>
  );
}
