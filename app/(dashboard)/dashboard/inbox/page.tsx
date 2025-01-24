'use client';
import React from 'react';
import { DashboardIcon } from '@/public/icons';
import Container from '../_components/Container';
import { useState } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import avatar from '@/public/icons/avatar.png';
import Image from 'next/image';
import TanstackTable from '../_components/TanstackTable';
import CustomModal from '../_components/CustomModal';
import { dateHandler } from '@/utils/functions/function';
import ProfileCard from '../_components/ProfileCard';

function Inbox() {
  const columnHelper = createColumnHelper<{
    id: number;
    date: string;
    description: string;
    fullName: string;
    email: string;
    image: string;
    uploadDate: string;
  }>();

  const realtorsData = [
    {
      id: 1,
      image: avatar,
      fullName: 'John Doe',
      description: 'Agent',
      email: 'john.doe@example.com',
      date: '2023-08-17T18:57:48.921Z',
    },
    {
      id: 2,
      image: avatar,
      fullName: 'Jane Smith',
      description: 'Manager',
      email: 'jane.smith@example.com',
      date: '2023-08-17T18:57:48.921Z',
    },
    {
      id: 3,
      image: avatar,
      fullName: 'Alice Johnson',
      description: 'Consultant',
      email: 'alice.johnson@example.com',
      date: '2023-08-17T18:57:48.921Z',
    },
  ];

  // Handle Permission Change
  // const handlePermissionChange = (index: number, checked: boolean) => {
  //   setRealtorsData((prev) =>
  //     prev.map((user, i) =>
  //       i === index ? { ...user, permission: checked } : user,
  //     ),
  //   );
  // };
  const [open, setOpen] = useState(false);
  const [purpose, setPurpose] = useState<'edit' | 'delete'>('edit');
  const [tab, setTab] = useState<'contact' | 'feedback' | 'user'>('contact');
  const [currUser, setCurrUser] = useState(-1);

  const RealtorColumns = [
    columnHelper.accessor('image', {
      header: 'User',
      cell: (info) => {
        const { image, fullName, email, id } = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={10}
              height={10}
              alt={fullName}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex cursor-pointer flex-col">
              <span
                className="underline"
                onClick={() => {
                  setTab('user');
                  setCurrUser(id);
                }}
              >
                {fullName}
              </span>
              <span>{email}</span>
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => {
        const { date } = info.row.original;
        const dateString = dateHandler(date);
        dateString?.split(',');
        return (
          <div className="flex flex-col">
            <span>{dateString?.split('at')[0].split(',')[0]}</span>
            <span>{dateString?.split('at')[1]}</span>
          </div>
        );
      },
    }),
  ] as unknown as ColumnDef<unknown, unknown>[];

  const currentUser = realtorsData.find((user) => user.id === currUser);

  return (
    <Container element="section">
      <h2 className="text-white mb-6">View Your Messages</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 bg-accent-foreground p-2 max-w-max rounded-lg">
            <span>Menu</span>
            <div
              onClick={() => setTab('contact')}
              className={`${
                tab === 'contact' && 'bg-background rounded-md'
              } px-3 py-1 flex items-center cursor-pointer gap-1`}
            >
              <DashboardIcon />
              <span>Contact</span>
            </div>
            <div
              onClick={() => setTab('feedback')}
              className={`${
                tab === 'feedback' && 'bg-background rounded-md'
              } px-3 py-1 flex items-center cursor-pointer gap-1`}
            >
              <DashboardIcon />
              <span>Feedback</span>
            </div>
          </div>
        </div>
        <div className='rounded-md border border-accent p-4 w-full'>
				{tab === 'contact' && (
          <TanstackTable
            handleDelete={() => {
              setOpen(true);
              setPurpose('delete');
            }}
						checkbox
            columns={RealtorColumns}
            data={realtorsData}
          />
        )}
        {tab === 'user' && currUser !== -1 && (
          <div className='flex flex-col w-full'>
            <div className="flex w-full justify-between items-center">
              <ProfileCard
                name={currentUser?.fullName}
                role={currentUser?.email}
              />
              <div className="flex flex-col">
								<span>09032344432</span>
                <span>
                  {dateHandler(currentUser?.date ?? '')?.split('at')[0].split(',')[0] || ''} .
                  {dateHandler(currentUser?.date ?? '')?.split('at')[1] || ''}
                </span>
              </div>
            </div>
						<div className='ml-20'>
						<span>TO: Me, info.example</span>
						<p>Lorem, ipsum dolor.</p>
						</div>
          </div>
        )}
				</div>
      </div>
      <CustomModal open={open} onChange={setOpen} purpose={purpose} />
    </Container>
  );
}

export default Inbox;
