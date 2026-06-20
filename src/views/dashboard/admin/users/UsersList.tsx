'use client';

// React Imports
import { useMemo, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

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

// Components
import SearchIcon from '@/components/icons/dashboard/SearchIcon';

// Features
import { roleLabels, UserRole } from '@/features/users/roles';

interface UsersListProps {
  users: UserType[];
}

const UsersList = ({ users }: UsersListProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo<ColumnDef<UserType>[]>(
    () => [
      {
        header: '#',
        accessorKey: 'id',
        cell: ({ row }) => <span className="text-gray-500">{row.original.id}</span>,
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
              <p className="text-gray-500 text-xs pt-0.5">{row.original.username}@</p>
            </div>
          </div>
        ),
      },
      {
        header: 'ایمیل',
        accessorKey: 'email',
        cell: ({ row }) => (
          <span className="text-sm text-gray-500">{row.original.email ?? '—'}</span>
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
              {roleLabels[role as UserRole] ?? role}
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
          <span className="text-sm text-gray-500">
            {row.original.lastLogin ? formatDate(row.original.lastLogin.toString()) : '—'}
          </span>
        ),
      },
      {
        header: 'تاریخ ثبت',
        accessorKey: 'createdAt',
        cell: ({ row }) => (
          <span className="text-sm text-gray-500">
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
    <div className="font-iranYekan rtl flex flex-col gap-5">
      {/* Search Box & Add Bottom */}
      <div className="w-full flex items-center justify-between px-12 mt-8">
        <div className="flex w-96 shadow-xs border border-transparent focus-within:border-primary rounded transition-colors">
          <div className="bg-white pr-4 flex items-center justify-center rounded-r">
            <SearchIcon className="text-gray-400 pb-0.5" size="28" />
          </div>

          <input
            type="text"
            placeholder="جستجو در کاربران ..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full bg-white rounded-l px-4 py-3 text-gray-600 text-sm outline-none"
          />
        </div>

        <div className="w-full flex items-center justify-end">
          <Link href="/admin/users/add">
            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-all cursor-pointer"
            >
              کاربر جدید
            </button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-12 pb-4">
        <table className="w-full text-right shadow rounded-lg overflow-hidden">
          <thead className="bg-white border-b border-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-5 py-4 text-sm text-gray-500 font-semibold cursor-pointer select-none hover:text-primary transition-colors"
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
                <td colSpan={columns.length} className="text-center py-12 text-gray-500">
                  کاربری یافت نشد!
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-white/20 transition-all bg-[#f3f3f3] border-b border-gray-200"
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
      <div className="flex flex-col gap-3 items-center justify-center mt-1 text-sm text-gray-500 px-9">
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

        <span className="text-gray-400">نتیجه : {table.getFilteredRowModel().rows.length}</span>
      </div>
    </div>
  );
};

export default UsersList;
