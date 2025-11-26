// Components
import OrderFormPageWrapper from '@/views/global/order-form/_orderformpage';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت سفارش',
  description:
    'در فراایده می‌توانید سفارش توسعه نرم‌افزار، طراحی محصول یا راهکارهای استارتاپی خود را ثبت کنید. تیم متخصص ما آماده همکاری در اجرای پروژه‌های نوآورانه است.',
};

const OrderFormPage = () => {
  return <OrderFormPageWrapper />;
};

export default OrderFormPage;
