import FormControl from '@/components/common/FormControl';
import { SearchIcon } from 'lucide-react';
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import StatusBadge, { StatusProps } from "./StatusBadge";
import TanstackTable from './TanstackTable';

export default function RealtorsTable() {
  const columnHelper = createColumnHelper<{
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
    name: 'John Doe',
    contactInfo: 'johndoe@example.com',
    listings: '40',
    status: 'verified' as StatusProps['stat_1'],
    listingsLastActive: '2024-12-01',
  },
  {
    name: 'Jane Smith',
    contactInfo: 'janesmith@example.com',
    listings: '40',
    status: 'denied' as StatusProps['stat_1'],
    listingsLastActive: '2024-11-25',
  },
  {
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
    cell: (info) => info.getValue(),
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
          <button type="button" className="p-2 border border-accent rounded-md">
            See All
          </button>
        </div>
      </div>
      <TanstackTable checkbox columns={RealtorColumns} data={RealtorsData} />
    </div>
  );
}
