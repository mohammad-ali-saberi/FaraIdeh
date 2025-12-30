'use client';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';

// Components
import Container from '@/component/Container';

// Types
import type { AchievementType } from '@/types/AchievementType';

const Achievements = ({ achievements }: { achievements: AchievementType[] }) => {
  return (
    <div id="achievements">
      <Container>
        <p className="rtl font-iranYekan font-semibold text-xl md:text-2xl lg:text-3xl leading-8 lg:leading-12">
          دستاوردها و جوایزِ مسیرِ رشد ما
        </p>

        {!achievements?.length ? (
          <p className="rtl bg-text-description text-white p-3 font-iranYekan text-center rounded-md mt-6">
            دستاوردی ثبت نشده!
          </p>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 rtl mt-8 lg:mt-20">
            {achievements.map((a) => (
              <Link
                key={a.id}
                href={a.photo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`مشاهده تصویر ${a.title} در تب جدید`}
                className="w-full h-full"
              >
                <div className="bg-[#F2F2F2] w-full lg:h-52 lg:p-5 rounded relative">
                  <Image
                    src={a.photo}
                    alt={a.title}
                    width={256}
                    height={256}
                    className="shadow-xl lg:absolute lg:-top-7 lg:-right-6 lg:w-64 w-full lg:h-46 h-52 rounded-md object-cover object-center"
                  />

                  <div className="lg:pr-60 relative h-full lg:pl-2 p-5 lg:p-0">
                    <p className="font-iranYekan font-semibold text-xl pt-1">{a.title}</p>

                    <p className="text-[#4D4D4D] font-iranYekan pt-2 leading-7">{a.description}</p>

                    <p className="font-yekanBakhFaNum text-[#4D4D4D] lg:absolute lg:bottom-0 lg:left-2 text-left">
                      سال: <b>{a.year}</b>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Achievements;
