'use server';

import { prisma } from '@/lib/prisma';
import { Order } from '@/types/OrdersType';

export async function getOrders(): Promise<Order[]> {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Parse JSON fields
    const parsedOrders = orders.map((order) => ({
      ...order,
      category: typeof order.category === 'string' ? JSON.parse(order.category) : order.category,
      users: typeof order.users === 'string' ? JSON.parse(order.users) : order.users,
    }));

    return parsedOrders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}
