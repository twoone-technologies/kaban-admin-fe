'use client';
import FormControl from '@/components/common/FormControl';
import { SearchIcon } from 'lucide-react';
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import TanstackTable from '../../_components/TanstackTable';
import StatusBadge, { StatusProps } from '../../_components/StatusBadge';
// import StatusBadge, { StatusProps } from ";
import avatar from '@/public/icons/avatar.png';
import Image from 'next/image';
import Pagination from '../../_components/PaginationTool';
// import TanstackTable from './TanstackTable';

export default function PropertyListTable() {
  const columnHelper = createColumnHelper<{
    title: string;
    image: string;
    type: string;
    realtor: string;
    status: [StatusProps['stat_1'], StatusProps['stat_2']];
    uploadDate: string;
  }>();

// Sample data for the table
const RealtorsData = [
  {
    title: 'luxury apartment',
    image: avatar,
    realtor: 'John Doe',
    type: 'apartment',
    status: ['featured', 'rent'] as [StatusProps['stat_1'], StatusProps['stat_2']],
    uploadDate: '2024-12-01',
  },
  {
    title: 'luxury apartment',
    image: avatar,
    realtor: 'Jane Smith',
    type: 'self-contained',
    status: ['denied', 'sale'] as [StatusProps['stat_1'], StatusProps['stat_2']],
    uploadDate: '2024-11-25',
  },
  {
    title: 'luxury apartment',
    image: avatar,
    realtor: 'Alice Johnson',
    type: '2-bedroom',
    status: ['pending', 'rent'] as [StatusProps['stat_1'], StatusProps['stat_2']],
    uploadDate: '2024-12-05',
  },
];

// Define columns
const RealtorColumns = [
      columnHelper.accessor('image', {
        header: 'Title',
        cell: (info) => {
          const { image, title } = info.row.original;
          return (
            <div className="flex items-center gap-2">
              <Image
                src={image}
                width={10}
                height={10}
                alt={title}
                className="w-12 h-12 "
              />
              <div className="flex flex-col">
                <span>{title}</span>
                <span className='text-slate-500'>address</span>
              </div>
            </div>
          );
        },
      }),
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('realtor', {
    header: 'Realtor',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const value = info.getValue();
      return <StatusBadge stat_1={value[0]} stat_2={value[1]} />;
    },
  }),
  columnHelper.accessor('uploadDate', {
    header: 'Upload Date',
    cell: (info) => info.getValue(),
  }),
] as unknown as ColumnDef<unknown, unknown>[];

  return (
    <div className="border min-w-max border-accent rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <h2>Property List</h2>
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
      <TanstackTable checkbox columns={RealtorColumns} data={RealtorsData} />
      <Pagination />
    </div>
  );
}
