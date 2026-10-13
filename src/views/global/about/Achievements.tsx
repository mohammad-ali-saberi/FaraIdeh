// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import Container from '@/components/Container';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import MedalIcon from '@/components/icons/MedalIcon';

// Types
import type { AchievementType } from '@/types/AchievementType';

const Achievements = ({ achievements }: { achievements: AchievementType[] }) => {
  return (
    <div id="achievements">
      <Container>
        <div className="rtl">
          <div className="bg-orange h-1 w-12 rounded-full" />

          <p className="font-iranYekan mt-3 text-xl leading-8 font-semibold md:text-2xl lg:text-3xl lg:leading-12">
            دستاوردها و جوایزِ مسیرِ رشد ما
          </p>
        </div>

        {!achievements?.length ? (
          <p className="rtl mt-6 rounded-2xl border border-[#e9eef7] bg-white px-6 py-5 text-center font-iranYekan text-sm font-medium text-[#7d8fb3]">
            دستاوردی ثبت نشده!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 mt-8 rtl lg:gap-8 lg:mt-14 xl:grid-cols-2">
            {achievements.map((a) => (
              <Link
                key={a.id}
                href={a.photo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`مشاهده تصویر ${a.title} در تب جدید`}
                className="group flex h-full flex-col rounded-[26px] border border-[#e9eef7] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_14px_34px_-20px_rgba(16,24,40,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_55px_-26px_rgba(10,47,182,0.4)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
              >
                <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-stretch">
                  {/* Certificate preview */}
                  <div className="relative w-full shrink-0 sm:w-[42%] lg:w-2/5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#eef4ff] sm:aspect-auto sm:h-full sm:min-h-40">
                      <Image
                        src={a.photo}
                        alt={a.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Hairline that follows the rounded corners */}
                      <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />
                    </div>

                    {/* Medal seal */}
                    <div className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white ring-4 ring-white/70 shadow-[0_12px_24px_-12px_rgba(255,99,0,0.9)] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
                      <MedalIcon size={20} />
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="relative flex flex-1 flex-col overflow-hidden rounded-[18px] px-2 pt-3 pb-2">
                    {/* Ghost year */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-7 left-1 font-yekanBakhFaNum text-[5.5rem] leading-none font-black text-primary/[0.07] select-none"
                    >
                      {a.year}
                    </span>

                    <div className="relative flex items-center gap-2">
                      <span className="bg-orange h-1 w-6 rounded-full" />
                      <span className="font-iranYekan text-xs font-bold text-orange">دستاورد</span>
                    </div>

                    <h3 className="font-iranYekan relative mt-2.5 text-lg font-extrabold text-[#16205f] transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {a.title}
                    </h3>

                    <p className="font-iranYekan relative mt-2 mb-5 text-sm leading-7 font-medium text-[#7d8fb3]">
                      {a.description}
                    </p>

                    <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-dashed border-[#e6ecf5] pt-3.5">
                      <span className="font-iranYekan flex items-center gap-1.5 text-xs font-extrabold text-primary">
                        مشاهده گواهی
                        <ArrowRightIcon
                          className="rotate-[-135deg] transition-transform duration-500 ease-out group-hover:rotate-[-180deg]"
                          size={14}
                        />
                      </span>

                      <span className="font-yekanBakhFaNum text-xs font-bold text-[#adb8cc]">
                        سال <span className="text-[#16205f]">{a.year}</span>
                      </span>
                    </div>
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
