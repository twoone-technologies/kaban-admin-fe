import React from 'react';
import { TriangleAlert, CircleCheck, CircleX, CircleMinus } from 'lucide-react';

export type StatusProps = {
  stat_1:
    | 'pending'
    | 'denied'
    | 'verified'
    | 'published'
    | 'expired'
    | 'featured';
  stat_2?: 'rent' | 'sale';
};

export default function StatusBadge({ stat_1, stat_2 }: StatusProps) {
  return (
    <div className="flex gap-2">
      <div className={`flex gap-2 items-center border border-accent rounded-lg max-w-max p-1
          ${stat_1 === 'featured' && 'bg-[#5DC26429] text-green-600'}
        `}>
        <div>
          {stat_1 === 'pending' && (
            <TriangleAlert className="text-background fill-[#F2AE40] border-none" />
          )}
          {stat_1 === 'verified' && (
            <CircleCheck className="text-background fill-[#5DC264] border-none" />
          )}
          {stat_1 === 'published' && (
            <CircleCheck className="text-background fill-[#5DC264] border-none" />
          )}
          {stat_1 === 'denied' && (
            <CircleX className="text-background fill-[#F04438] border-none" />
          )}
          {stat_1 === 'expired' && (
            <CircleMinus className="text-background fill-[#F04438] border-none" />
          )}
          {stat_1 === 'featured' && (
            <div className={`w-3 h-3 rounded-full items-center bg-green-500`} />
          )}
        </div>
        <span>{stat_1.charAt(0).toUpperCase() + stat_1.slice(1)}</span>
      </div>
      {stat_2 && (
        <div className={`flex gap-2 items-center rounded-lg border border-accent  max-w-max p-1
        ${stat_2 === 'rent' ? 'bg-[#5DC26429] text-green-600' : 'bg-[#437EF729] text-blue-600'}`}>
          <div className={`w-3 h-3 rounded-full ${stat_2 === 'rent' ? 'bg-green-500' : 'bg-blue-500'}`} />
          <span>{stat_2.charAt(0).toUpperCase() + stat_2.slice(1)}</span>
        </div>
      )}
    </div>
  );
}
