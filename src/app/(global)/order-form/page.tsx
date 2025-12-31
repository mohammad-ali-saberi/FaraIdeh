// Components
import OrderFormPageWrapper from '@/views/global/order-form/OrderFormPage';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت سفارش',
  description:
    'در فراایده می‌توانید سفارش توسعه نرم‌افزار، طراحی محصول یا راهکارهای استارتاپی خود را ثبت کنید. تیم متخصص ما آماده همکاری در اجرای پروژه‌های نوآورانه است.',
  openGraph: {
    title: 'ثبت سفارش | فراایده',
    description:
      'در فراایده می‌توانید سفارش توسعه نرم‌افزار، طراحی محصول یا راهکارهای استارتاپی خود را ثبت کنید. تیم متخصص ما آماده همکاری در اجرای پروژه‌های نوآورانه است.',
    url: 'https://fara-ideh.ir/order-form',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://fara-ideh.ir/order-form',
  },
};

const OrderFormPage = () => {
  return <OrderFormPageWrapper />;
};

export default OrderFormPage;
