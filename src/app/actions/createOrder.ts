'use server';

import { prisma } from '@/libs/prisma';

interface User {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
}

interface CreateOrderInput {
  categories: string[];
  users: User[];
  description: string;
}

export async function createOrder(data: CreateOrderInput) {
  try {
    // Validation
    if (!data.categories || data.categories.length === 0) {
      return {
        success: false,
        error: 'لطفا حداقل یک دسته را انتخاب کنید',
      };
    }

    if (!data.users || data.users.length === 0) {
      return {
        success: false,
        error: 'لطفا اطلاعات کاربر را وارد کنید',
      };
    }

    if (!data.description || data.description.trim().length === 0) {
      return {
        success: false,
        error: 'لطفا توضیحات پروژه را وارد کنید',
      };
    }

    // Validate user data
    for (const user of data.users) {
      if (!user.firstName || !user.lastName || !user.contactNumber) {
        return {
          success: false,
          error: 'لطفا تمام فیلدهای الزامی را پر کنید',
        };
      }
    }

    // Create order in database
    const order = await prisma.order.create({
      data: {
        category: JSON.parse(JSON.stringify(data.categories)),
        users: JSON.parse(JSON.stringify(data.users)),
        description: data.description,
      },
    });

    return {
      success: true,
      message: 'سفارش شما با موفقیت ثبت شد',
      orderId: order.id,
    };
  } catch (error) {
    console.error('Error creating order:', error);
    return {
      success: false,
      error: 'خطایی در ثبت سفارش رخ داد. لطفا دوباره تلاش کنید',
    };
  }
}
