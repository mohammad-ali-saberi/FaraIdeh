export const dynamic = 'force-dynamic';

// Next Imports
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Components
import Header from '@/components/dashboard/Header';
import Footer from '@/components/dashboard/Footer';
import Sidebar from '@/components/dashboard/Sidebar';

// Actions
import { getAuthUser } from '@/libs/auth';
import { getSocialMedia } from '@/app/actions/getSocialMedia';
import { getProfile } from '@/app/actions/getProfile';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'داشبورد مدیریت',
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await getAuthUser();

  if (!user) {
    redirect('/login');
  }

  const [socialMedia, profile] = await Promise.all([getSocialMedia(), getProfile()]);

  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header profile={profile} />
        {children}
        <Footer socialMedia={socialMedia} />
      </div>
      <Sidebar />
    </div>
  );
}
