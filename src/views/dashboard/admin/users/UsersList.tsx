'use client';

// React Imports
import { useMemo, useState } from 'react';

// Next Imports
import Image from 'next/image';

// TanStack Table
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

// Types
import { UserType } from '@/types/UsersType';

// Utils
import { formatDate } from '@/utils/formatDate';

interface UsersListProps {
  users: UserType[];
}

const roleLabels: Record<string, string> = {
  admin: 'مدیر',
  writer: 'نویسنده',
  editor: 'ویرایشگر',
  user: 'کاربر',
};

const UsersList = ({ users }: UsersListProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo<ColumnDef<UserType>[]>(
    () => [
      {
        header: '#',
        accessorKey: 'id',
        cell: ({ row }) => <span className="text-gray-400">{row.original.id}</span>,
        size: 50,
      },
      {
        header: 'کاربر',
        accessorKey: 'fullName',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            {row.original.photo ? (
              <Image
                src={row.original.photo}
                alt={row.original.fullName}
                width={36}
                height={36}
                className="rounded-full object-cover "
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-700/20 flex items-center justify-center text-gray-600 font-semibold text-sm">
                {row.original.fullName.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-medium text-sm">{row.original.fullName}</p>
              <p className="text-gray-400 text-xs pt-0.5">{row.original.username}@</p>
            </div>
          </div>
        ),
      },
      {
        header: 'ایمیل',
        accessorKey: 'email',
        cell: ({ row }) => (
          <span className="text-sm text-gray-400">{row.original.email ?? '—'}</span>
        ),
      },
      {
        header: 'نقش',
        accessorKey: 'role',
        cell: ({ row }) => {
          const role = row.original.role;
          return (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                role === 'admin'
                  ? 'bg-primary/20 text-primary'
                  : role === 'writer'
                    ? 'bg-blue-500/20 text-blue-500'
                    : role === 'editor'
                      ? 'bg-purple-500/20 text-purple-500'
                      : 'bg-gray-500/20 text-gray-500'
              }`}
            >
              {roleLabels[role] ?? role}
            </span>
          );
        },
      },
      {
        header: 'وضعیت',
        accessorKey: 'isActive',
        cell: ({ row }) => (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              row.original.isActive
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {row.original.isActive ? 'فعال' : 'غیرفعال'}
          </span>
        ),
      },
      {
        header: 'آخرین ورود',
        accessorKey: 'lastLogin',
        cell: ({ row }) => (
          <span className="text-sm text-gray-400">
            {row.original.lastLogin ? formatDate(row.original.lastLogin.toString()) : '—'}
          </span>
        ),
      },
      {
        header: 'تاریخ ثبت',
        accessorKey: 'createdAt',
        cell: ({ row }) => (
          <span className="text-sm text-gray-400">
            {formatDate(row.original.createdAt.toString())}
          </span>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: users,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="font-iranYekan rtl">
      {/* Table */}
      <div className="overflow-x-auto p-8">
        <table className="w-full text-right shadow-md rounded-lg">
          <thead className="bg-white border-b border-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-5 py-4 text-sm text-gray-500 font-medium cursor-pointer select-none hover:text-primary transition-colors"
                  >
                    <div className="flex items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === 'asc' && ' ↑'}
                      {header.column.getIsSorted() === 'desc' && ' ↓'}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-12 text-gray-400">
                  کاربری یافت نشد
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-white/80 transition-all bg-white/1 border-b border-gray-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-5 py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-2 text-sm text-gray-500 px-9">
        <div className="flex items-center gap-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded bg-primary text-white px-3 py-2 hover:bg-white hover:text-primary border border-transparent hover:border-primary disabled:opacity-50 disabled:cursor-no-drop disabled:bg-primary disabled:text-white transition-all cursor-pointer"
          >
            قبلی
          </button>

          <span>
            صفحه {table.getState().pagination.pageIndex + 1} از {table.getPageCount()}
          </span>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded bg-primary text-white px-3 py-2 hover:bg-white hover:text-primary border border-transparent hover:border-primary disabled:opacity-50 disabled:cursor-no-drop disabled:bg-primary disabled:text-white transition-all cursor-pointer"
          >
            بعدی
          </button>
        </div>

        <span className="bg-primary text-white px-4 py-2 rounded">
          نتیجه : {table.getFilteredRowModel().rows.length}
        </span>
      </div>
    </div>
  );
};

export default UsersList;
