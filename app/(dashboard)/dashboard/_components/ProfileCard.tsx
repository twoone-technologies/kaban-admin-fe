'use client';
import Rating from '@/components/common/Ratings';
import { DashboardIcon, UserIcon, VerifyIcon } from '@/public/icons';
import avatar from '@/public/icons/avatar.png';
import Image from 'next/image';

type AgentProps = {
  src?: string | undefined | null;
  name?: string | null;
  role?: string | null;
  isCollapsed?: boolean;
  isVerified?: boolean;
  className?: string;
  star?: number;
  open?: boolean;
  onClick?: React.ChangeEventHandler<HTMLDivElement> &
    React.MouseEventHandler<HTMLDivElement>;
};

export default function ProfileCard({
  name,
  role,
  star,
  onClick,
  isVerified,
  open,
  className,
  isCollapsed,
}: AgentProps) {
  return (
    <div
      onClick={(e) => onClick && onClick(e)}
      className={`cursor-pointer relative flex gap-4 items-center f-width align-y px-3 py-3 ${className}`}
    >
      <div
        className={`rounded-full border overflow-hidden ${
          isCollapsed ? 'h-9 w-9' : 'h-14 w-14'
        }`}
      >
        <Image src={avatar} height={90} className={''} alt={'img'} />
      </div>
      <div className={`flex flex-col ${isCollapsed && 'hidden'}`}>
        <div className="flex gap-1 items-center">
          <span className={`text-base`}>{name}</span>
          {isVerified && <VerifyIcon />}
        </div>
        <span className={`text-base`}>{role}</span>
        {star && <Rating num={star} />}
      </div>
      <div
        className={`fixed max-w-max left-2 bottom-24 flex w-full transition-all bg-accent-foreground flex-col border border-accent rounded-lg
        ${open ? 'block' : 'hidden'}
        `}
      >
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
