// Components
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import TermsPageWrapper from '@/views/global/terms/TermsPage';

// Libs
import { getTermsPageContent } from '@/libs/termsPage';
import { OG_DEFAULTS, SITE_URL } from '@/libs/siteConfig';

// Types
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'قوانین و مقررات',
  description:
    'شرایط استفاده از وب‌سایت و خدمات فراایده؛ ثبت سفارش، پرداخت، تحویل پروژه، مالکیت معنوی، حریم خصوصی، لغو سفارش و پشتیبانی.',
  openGraph: {
    ...OG_DEFAULTS,
    title: 'قوانین و مقررات فراایده',
    description:
      'شرایط همکاری با فراایده از ثبت سفارش تا تحویل پروژه؛ پرداخت، بازبینی، مالکیت معنوی، محرمانگی و لغو سفارش.',
    url: '/terms',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/terms',
  },
};

const TermsPage = async () => {
  const terms = await getTermsPageContent();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'خانه', url: SITE_URL },
          { name: 'قوانین و مقررات', url: `${SITE_URL}/terms` },
        ]}
      />

      <TermsPageWrapper title={terms.title} content={terms.content} updatedAt={terms.updatedAt} />
    </>
  );
};

export default TermsPage;
