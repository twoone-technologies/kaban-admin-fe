"use client";
import FormControl from '@/components/common/FormControl';
import { SearchIcon } from 'lucide-react';
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import StatusBadge, { StatusProps } from '../_components/StatusBadge';
import TanstackTable from '../_components/TanstackTable';
import Container from '../_components/Container';
import { useRouter } from 'next/navigation';

export default function Realtors() {
  const columnHelper = createColumnHelper<{
    id: number;
    name: string;
    contactInfo: string;
    status: StatusProps['stat_1'];
    listings: string;
    listingsLastActive: string;
  }>();
//RealtorsData

// Sample data for the table
const RealtorsData = [
  {
    id: 1,
    name: 'John Doe',
    contactInfo: 'johndoe@example.com',
    listings: '40',
    status: 'verified' as StatusProps['stat_1'],
    listingsLastActive: '2024-12-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    contactInfo: 'janesmith@example.com',
    listings: '40',
    status: 'denied' as StatusProps['stat_1'],
    listingsLastActive: '2024-11-25',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    contactInfo: 'alicej@example.com',
    listings: '40',
    status: 'pending' as StatusProps['stat_1'],
    listingsLastActive: '2024-12-05',
  },
];

// Define columns
const RealtorColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => {
      const { name, id } = info.row.original;
      return (
        <span
          onClick={() => router.push(`./realtors/${id}`)}
          className="font-semibold underline cursor-pointer"
        >
          {name}
        </span>
      );
    },
  }),
  columnHelper.accessor('contactInfo', {
    header: 'Contact Info',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const value = info.getValue();
      return <StatusBadge stat_1={value} />
    },
  }),
  columnHelper.accessor('listings', {
    header: 'Listings',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('listingsLastActive', {
    header: 'Listings Last Active',
    cell: (info) => info.getValue(),
  }),
] as unknown as ColumnDef<unknown, unknown>[];


const router = useRouter();

  return (
    <Container element='section'>
			<div className="border min-w-max border-accent rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <h2>All Realtors</h2>
        <div className="flex gap-2">
          <form className="relative border border-accent rounded-md pl-5 py-2">
            <FormControl
              as="input"
              containerClass="bg-background rounded-md"
              className="bg-transparent"
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
    </div>
		</Container>
  );
}
