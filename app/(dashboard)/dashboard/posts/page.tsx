'use client';
// import { Button } from '@/components/ui/button';
import React from 'react';
import Container from '../_components/Container';
import PostBlogSupport, { Realtor } from '../_components/PostBlogSupport';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import StatusBadge, { StatusProps } from '../_components/StatusBadge';
import avatar from '@/public/icons/avatar.png';
import Image from 'next/image';

export default function Posts() {
  const columnHelper = createColumnHelper<Realtor>();
  const [realtorData, setRealtorData] = React.useState<Realtor[]>([
    {
      image: avatar,
      title: 'John Dunk',
      category: 'blog',
      status: 'verified' as StatusProps['stat_1'],
      date: '2024-12-01',
    },
    {
      image: avatar,
      title: 'Jane Smith',
      category: 'support',
      status: 'denied' as StatusProps['stat_1'],
      date: '2024-11-25',
    },
    {
      image: avatar,
      title: 'Alice Johnson',
      category: 'blog',
      status: 'pending' as StatusProps['stat_1'],
      date: '2024-12-05',
    },
  ]);
  const handleSort = (type: 'support' | 'blog' | 'all') => {
    const baseData = realtorData;

    if (type === 'all') {
      setRealtorData(baseData); // No sorting for 'All Post'
    } else {
      const sorted = [...baseData].sort((a, b) => {
        // Prioritize items matching the selected category
        if (a.category === type && b.category !== type) return -1;
        if (a.category !== type && b.category === type) return 1;
        return 0; // Preserve order for items with the same category
      });
      setRealtorData(sorted);
    }
  };


  // Define columns
  const realtorColumns = [
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

  return (
    <Container element="section" className='flex flex-col gap-4'>
      <div className="flex justify-between items-center">
        <h2>Manage Your Posts</h2>
        <Link href="/dashboard/posts/addPost"
          className="text-white bg-secondary p-2 rounded-md flex gap-1 items-center"
        >
          <PlusIcon />
          <span>Add Post</span>
        </Link>
      </div>
      <PostBlogSupport columns={realtorColumns} handleSort={handleSort} data={realtorData} />
    </Container>
  );
}
