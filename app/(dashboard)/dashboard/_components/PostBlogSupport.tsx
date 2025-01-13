import FormControl from '@/components/common/FormControl';
import { SearchIcon, ListFilter, ChevronDown } from 'lucide-react';
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import StatusBadge, { StatusProps } from "./StatusBadge";
import TanstackTable from './TanstackTable';
import Image from 'next/image';
import avatar from '@/public/icons/avatar.png';

export default function PostBlogSupport() {
  const columnHelper = createColumnHelper<{
    title: string;
    image: string;
    category: string;
    status: StatusProps['stat_1'];
    date: string;
  }>();

// Sample data for the table
const RealtorsData = [
  {
    image: avatar,
    title: 'John Doe',
    category: 'johndoe@example.com',
    status: 'verified' as StatusProps['stat_1'],
    date: '2024-12-01',
  },
  {
    image: avatar,
    title: 'Jane Smith',
    category: 'janesmith@example.com',
    status: 'denied' as StatusProps['stat_1'],
    date: '2024-11-25',
  },
  {
    image: avatar,
    title: 'Alice Johnson',
    category: 'alicej@example.com',
    status: 'pending' as StatusProps['stat_1'],
    date: '2024-12-05',
  },
];

// Define columns
const RealtorColumns = [
    columnHelper.accessor('title', {
      header: 'Title',
      cell: (info) => {
        const { image, title } = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={80}
              height={40}
              alt={title}
              className="w-8 h-8 rounded-full"
            />
            <span>{title}</span>
          </div>
        );
      },
    }),
  columnHelper.accessor('category', {
    header: 'category',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const value = info.getValue();
      return <StatusBadge stat_1={value} />
    },
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => info.getValue(),
  }),

] as unknown as ColumnDef<unknown, unknown>[];

  return (
    <div className="border border-accent rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <h2>All Realtors</h2>
        <div className="flex gap-2">
          <form className="relative border border-accent rounded-md pl-5 py-2">
            <FormControl
              as="input"
              containerClass="bg-background rounded-md"
              placeholder="search here"
            />
            <button className="absolute left-2 top-[9px]" type="submit">
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          <button type="button" className="p-2 border flex gap-1 border-accent rounded-md">
            <ListFilter/>Filter <ChevronDown/>
          </button>
          <button type="button" className="p-2 border border-accent rounded-md">
            See All
          </button>
        </div>
      </div>
      <TanstackTable checkbox others columns={RealtorColumns} data={RealtorsData} />
    </div>
  );
}
