// Components
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ContactPageSchema from '@/components/ContactPageSchema';
import ContactPageWrapper from '@/views/global/contact/ContactPage';

// Libs
import { CONTACT_INFO } from '@/libs/contactInfo';
import { OG_DEFAULTS, SITE_URL } from '@/libs/siteConfig';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تماس با ما',
  description:
    'راه‌های ارتباط با تیم فراایده؛ تماس تلفنی، ایمیل و تلگرام، همراه با فرم تماس مستقیم برای شروع همکاری، پشتیبانی پروژه و پاسخ به سؤال‌ها.',
  openGraph: {
    ...OG_DEFAULTS,
    title: 'تماس با فراایده',
    description:
      'برای شروع همکاری، پشتیبانی پروژه یا هر سؤالی درباره خدمات فراایده، از راه‌های ارتباطی یا فرم تماس با ما در ارتباط باشید.',
    url: '/contact',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'خانه', url: SITE_URL },
          { name: 'تماس با ما', url: `${SITE_URL}/contact` },
        ]}
      />
      <ContactPageSchema />
      <ContactPageWrapper />

      {/* Kept in the HTML for crawlers and text-only clients: the human-readable
          details are rendered as links inside the page components. */}
      <p className="sr-only">
        تلفن: {CONTACT_INFO.phoneDisplay} — ایمیل: {CONTACT_INFO.email} — تلگرام:{' '}
        {CONTACT_INFO.telegramHandle}
      </p>
    </>
  );
};

export default ContactPage;
