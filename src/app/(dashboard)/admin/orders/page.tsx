// Components
import OrdersPageWrapper from '@/views/dashboard/admin/orders/OrdersPage';

// Actions
import { getOrders } from '@/app/actions/getOrders';

const OrdersPage = async () => {
  const orders = await getOrders();

  return <OrdersPageWrapper orders={orders} />;
};

export default OrdersPage;
