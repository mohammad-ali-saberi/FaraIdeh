import { getAuthUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { Metadata } from 'next';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'داشبورد مدیریت',
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await getAuthUser();

  // Redirect to login if not authenticated
  if (!user) {
    redirect('/login');
  }

  return <>{children}</>;
}
