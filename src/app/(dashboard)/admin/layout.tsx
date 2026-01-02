export const dynamic = 'force-dynamic';
import { getAuthUser } from '@/libs/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

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
