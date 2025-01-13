import { useState } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import TanstackTable from './TanstackTable';
// import ButtonSwitch from './ButtonSwitch';
import avatar from '@/public/icons/avatar.png';
import FormControl from '@/components/common/FormControl';
import { SearchIcon } from 'lucide-react';
import ButtonSwitch from './ButttonSwitch';
import Image from 'next/image';

export default function UserListTable() {
  const [realtorsData, setRealtorsData] = useState([
    {
      image: avatar,
      fullName: 'John Doe',
      role: 'Agent',
      email: 'john.doe@example.com',
      permission: false,
    },
    {
      image: avatar,
      fullName: 'Jane Smith',
      role: 'Manager',
      email: 'jane.smith@example.com',
      permission: true,
    },
    {
      image: avatar,
      fullName: 'Alice Johnson',
      role: 'Consultant',
      email: 'alice.johnson@example.com',
      permission: false,
    },
  ]);

  const columnHelper = createColumnHelper<(typeof realtorsData)[0]>();

  // Handle Permission Change
  const handlePermissionChange = (index: number, checked: boolean) => {
    setRealtorsData((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, permission: checked } : user,
      ),
    );
  };

  // Define Columns
  const RealtorColumns = [
    columnHelper.accessor('image', {
      header: 'User',
      cell: (info) => {
        const { image, fullName } = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={10}
              height={10}
              alt={fullName}
              className="w-8 h-8 rounded-full"
            />
            <span>{fullName}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('role', {
      header: 'Role',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('permission', {
      header: 'Permission',
      cell: (info) => {
        const { permission } = info.row.original;
        const rowIndex = info.row.index;
        return (
          <div className="flex items-center gap-2">
            <ButtonSwitch
              checked={permission}
              onChange={(checked: boolean) =>
                handlePermissionChange(rowIndex, checked)
              }
            />
            <span>{permission ? 'Enabled' : 'Denied'}</span>
          </div>
        );
      },
    }),
  ] as unknown as ColumnDef<unknown, unknown>[];

  return (
    <div className="border min-w-max border-accent rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <h2>User List</h2>
        <div className="flex gap-2">
          <form className="relative border border-accent rounded-md pl-5 py-2">
            <FormControl
              as="input"
              containerClass="bg-background rounded-md"
              placeholder="Search here"
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
      <TanstackTable others columns={RealtorColumns} data={realtorsData} />
    </div>
  );
}
