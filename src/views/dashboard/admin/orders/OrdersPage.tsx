'use client';

// Components
import OrdersList from './OrdersList';

// Types
import { Order } from '@/types/OrdersType';

interface OrdersPageWrapperProps {
  orders: Order[];
}

const OrdersPageWrapper = ({ orders }: OrdersPageWrapperProps) => {
  return <OrdersList orders={orders} />;
};

export default OrdersPageWrapper;
