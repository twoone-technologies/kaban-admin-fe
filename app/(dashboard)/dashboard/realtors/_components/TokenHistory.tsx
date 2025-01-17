'use client';
import FormControl from '@/components/common/FormControl';
// import { Pagination } from '@/components/ui/pagination';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { SearchIcon } from 'lucide-react';
import React from 'react';
import TanstackTable from '../../_components/TanstackTable';

// type Props = {}

export default function TokenHistory() {
  function addCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const columnHelper = createColumnHelper<{
    title: string;
    action: string;
    tokenQuantity: number;
    date: string;
  }>();

  // Sample data for the table
  const RealtorsData = [
    {
      title: 'luxury apartment',
      tokenQuantity: 23,
      action: 'apartment',
      date: '2024-12-01',
    },
    {
      title: 'luxury apartment',
      tokenQuantity: 23,
      action: 'self-contained',
      date: '2024-11-25',
    },
    {
      title: 'luxury apartment',
      tokenQuantity: 23,
      action: '2-bedroom',
      date: '2024-12-05',
    },
  ];

  // Define columns
  const RealtorColumns = [
    columnHelper.accessor('title', {
      header: 'Title',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('tokenQuantity', {
      header: 'Token Quantity',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'date',
      cell: (info) => info.getValue(),
    }),
  ] as unknown as ColumnDef<unknown, unknown>[];

  return (
    <div className="border min-w-max border-accent rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-slate-500">Available Balance</span>
          <span>{addCommas(5000)} kbt</span>
        </div>
        <div className="flex gap-2">
          <form className="relative border border-accent rounded-md pl-5 py-2">
            <FormControl
              as="input"
              className="bg-transparent"
              containerClass="bg-background rounded-md"
              placeholder="search here"
            />
            <button className="absolute left-2 top-[9px]" type="submit">
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          <button type="button" className="p-2 border border-accent rounded-md">
            See All
          </button>
        </div>
      </div>
      <TanstackTable checkbox nil columns={RealtorColumns} data={RealtorsData} />
    </div>
  );
}
