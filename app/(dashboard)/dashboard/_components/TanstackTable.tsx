'use client';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
// import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';
import { DeleteIcon, EditIcon } from '@/public/icons';
import { Checkbox } from '@/components/ui/checkbox';

type TableProps = {
  columns: ColumnDef<unknown, unknown>[];
  data: unknown[];
  checkbox?: boolean;
  others?: boolean;
  nil?: boolean;
  handleDelete?: (index: string) => void;
  handleEdit?: (index: string) => void;
};

export default function TanstackTable({
  columns,
  data,
  checkbox,
  handleDelete,
  handleEdit,
  others,
  nil,
}: TableProps) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set<number>());

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allRowIds = new Set(
        table.getRowModel().rows.map((_, index) => index),
      );
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleRowSelect = (rowIndex: number) => {
    const updatedSelectedRows = new Set(selectedRows);
    if (updatedSelectedRows.has(rowIndex)) {
      updatedSelectedRows.delete(rowIndex);
    } else {
      updatedSelectedRows.add(rowIndex);
    }
    setSelectedRows(updatedSelectedRows);
  };

  return (
    <table className="w-full">
      <thead className="text-left bg-accent-foreground rounded-md">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="rounded-md">
            {checkbox && (
              <th className="rounded-l-md">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={handleSelectAll}
                />
              </th>
            )}
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-3">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
            <th className="rounded-r-md"></th>
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, rowIndex) => (
          <tr
            key={row.id}
            className={`hover:bg-gray-900 transition-colors duration-150 ${
              rowIndex === table.getRowModel().rows.length - 1
                ? ''
                : 'border-b border-accent'
            }`}
            style={{ padding: '10px 0' }}
          >
            {checkbox && (
              <td>
                <Checkbox
                  checked={selectedRows.has(rowIndex)}
                  onCheckedChange={() => handleRowSelect(rowIndex)}
                />
              </td>
            )}
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-2 px-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
            {nil ? null : (
              <td className="py-2 px-3">
                {others ? (
                  <div className="flex space-x-2">
                    <DeleteIcon
                      onClick={() => handleDelete && handleDelete(row.id)}
                    />
                    <EditIcon
                      onClick={() =>handleEdit && handleEdit(row.id)}
                    />
                  </div>
                ) : (
                  <DeleteIcon
                  onClick={() => handleDelete && handleDelete(row.id)}
                />
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
