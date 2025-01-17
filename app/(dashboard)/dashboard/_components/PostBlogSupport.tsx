import FormControl from '@/components/common/FormControl';
import { SearchIcon, ListFilter, ChevronDown } from 'lucide-react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import StatusBadge, { StatusProps } from './StatusBadge';
import TanstackTable from './TanstackTable';
import Image from 'next/image';
import avatar from '@/public/icons/avatar.png';
import { useState } from 'react';

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
        return <StatusBadge stat_1={value} />;
      },
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => info.getValue(),
    }),
  ] as unknown as ColumnDef<unknown, unknown>[];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="border min-w-max border-accent rounded-lg p-3">
      <div className="flex justify-between gap-2 items-center mb-4">
        <div className="flex gap-2 rounded-md p-1 bg-accent-foreground">
          {['All Post', 'Blog', 'Support'].map((tab, id) => (
            <span
              key={id}
              className={`${activeTab === id ? 'text-white bg-background' : ''} px-6 py-1 rounded-md cursor-pointer`}
              onClick={() => setActiveTab(id)}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <form className="relative border border-accent rounded-md pl-5 py-2">
            <FormControl
              as="input"
              className='bg-transparent'
              containerClass="bg-background rounded-md"
              placeholder="search here"
            />
            <button className="absolute left-2 top-[9px]" type="submit">
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          <button
            type="button"
            className="p-2 border flex gap-1 border-accent rounded-md"
          >
            <ListFilter />
            Filter <ChevronDown />
          </button>
          <button type="button" className="p-2 border border-accent rounded-md">
            See All
          </button>
        </div>
      </div>
      <TanstackTable
        checkbox
        others
        columns={RealtorColumns}
        data={RealtorsData}
      />
    </div>
  );
}
