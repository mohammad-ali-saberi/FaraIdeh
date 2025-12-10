'use client';

// Next Imports
import Image from 'next/image';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import { Feedback } from '@/types/FeedbacksType';

interface FeedbacksListProps {
  feedbacks: Feedback[];
}

const FeedbacksList = ({ feedbacks }: FeedbacksListProps) => {
  if (feedbacks.length === 0) {
    return (
      <div className="px-12 mt-12">
        <div className="bg-white border border-[#D7D7D7] px-16 rounded-3xl h-176 flex flex-col gap-3 items-center justify-center">
          <Image
            src="https://s6.uupload.ir/files/image_8_mict.png"
            alt="EmptyImage"
            width={300}
            height={300}
          />
          <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ پیامی ندارید!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-12 mt-12">
      <div className="bg-white border border-[#D7D7D7] px-16 rounded-3xl h-176 overflow-y-scroll">
        {feedbacks.map((feedback) => {
          const fullName = `${feedback.firstName} ${feedback.lastName}`;

          return (
            <div
              key={feedback.id}
              className="border-b border-[#D7D7D7] rtl flex flex-col gap-y-3 pb-8 mt-10"
            >
              <div className="flex items-start justify-between">
                {/* Full Name */}
                <h2 className="font-iranYekan font-semibold text-2xl">{fullName}</h2>

                {/* Date */}
                <span className="font-yekanBakhFaNum text-[#767676] font-medium">
                  {formatDate(new Date(feedback.createdAt))}
                </span>
              </div>

              {/* Phone Number */}
              {feedback.phone && (
                <p className="font-yekanBakhFaNum text-[#767676] font-medium text-lg">
                  {feedback.phone}
                </p>
              )}

              {/* Email */}
              {feedback.email && (
                <p className="font-iranYekan text-[#767676] font-medium text-lg">
                  {feedback.email}
                </p>
              )}

              {/* Message */}
              <p className="font-iranYekan text-[#767676] text-justify leading-8">
                {feedback.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbacksList;
