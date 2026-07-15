'use client';

// Next Imports
import Image from 'next/image';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import { Order } from '@/types/OrdersType';

interface OrdersListProps {
  orders: Order[];
}

const OrdersList = ({ orders }: OrdersListProps) => {
  if (orders.length === 0) {
    return (
      <div className="px-12 mt-12">
        <div className="bg-white border border-[#D7D7D7] px-16 rounded-3xl h-176 flex flex-col gap-3 items-center justify-center">
          <Image
            src="https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/image_8_mict-removebg-preview_kxug_bxigvx"
            alt="EmptyImage"
            width={300}
            height={300}
          />
          <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ سفارشی ندارید!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-12 mt-12">
      <div className="bg-white border border-[#D7D7D7] px-16 rounded-3xl h-176 overflow-y-scroll">
        {orders.map((order) => {
          const user = order.users && order.users.length > 0 ? order.users[0] : null;
          const fullName = user ? `${user.firstName} ${user.lastName}` : 'نام نامشخص';

          return (
            <div
              key={order.id}
              className="border-b border-[#D7D7D7] rtl flex flex-col gap-y-2 pb-8 mt-10"
            >
              <div className="flex items-start justify-between">
                {/* Category */}
                <h2 className="font-iranYekan font-semibold text-2xl">
                  {typeof order.category === 'string'
                    ? order.category
                    : Array.isArray(order.category)
                      ? (order.category as string[]).join('، ')
                      : 'نامشخص'}
                </h2>

                {/* Date */}
                <span className="font-yekanBakhFaNum text-[#767676] font-medium">
                  {formatDate(new Date(order.createdAt))}
                </span>
              </div>

              {/* Full Name */}
              {user && (
                <p className="font-iranYekan text-[#767676] text-lg font-medium">{fullName}</p>
              )}

              {/* Phone Number */}
              {user && (
                <p className="font-yekanBakhFaNum text-[#767676] font-medium text-lg">
                  {user.contactNumber}
                </p>
              )}

              {/* Email */}
              {user && (
                <p className="font-iranYekan text-[#767676] font-medium text-lg">{user.email}</p>
              )}

              {/* Description */}
              <p className="font-iranYekan text-[#767676] text-justify leading-8">
                {order.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersList;
