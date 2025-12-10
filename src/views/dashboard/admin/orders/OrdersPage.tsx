'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import OrdersList from './OrdersList';

// Types
import { Order } from '@/types/OrdersType';

interface OrdersPageWrapperProps {
  orders: Order[];
}

const OrdersPageWrapper = ({ orders }: OrdersPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <OrdersList orders={orders} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default OrdersPageWrapper;
