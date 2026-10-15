'use client';

// React Imports
import { useEffect, useRef, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import MedalIcon from '@/components/icons/MedalIcon';

// Types
import type { AchievementType } from '@/types/AchievementType';

const cardClass =
  'group relative flex h-full flex-col rounded-[26px] border border-[#e9eef7] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_14px_34px_-20px_rgba(16,24,40,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_55px_-26px_rgba(10,47,182,0.4)]';

const readMoreClass =
  'pointer-events-auto font-iranYekan group/read flex items-center gap-1 text-[11px] font-extrabold text-primary transition-colors duration-300 ease-out hover:text-orange focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none';

const AchievementCard = ({ achievement }: { achievement: AchievementType }) => {
  const { photo, title, description, year } = achievement;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = descriptionRef.current;
    if (!element) return;

    const measure = () => setIsTruncated(element.scrollHeight - element.clientHeight > 1);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [description]);

  // Never leave a card expanded after its chip is gone.
  useEffect(() => {
    if (!isTruncated) setIsExpanded(false);
  }, [isTruncated]);

  // Escape and clicks anywhere else close the popover, like any other dropdown.
  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      setIsExpanded(false);
      readMoreRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (popoverRef.current?.contains(target) || readMoreRef.current?.contains(target)) return;

      setIsExpanded(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isExpanded]);

  return (
    <div className={`${cardClass} ${isExpanded ? 'z-30' : ''}`}>
      <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-stretch">
        {/* Certificate preview */}
        <div className="relative w-full shrink-0 sm:w-[42%] lg:w-2/5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#eef4ff] sm:aspect-auto sm:h-full sm:min-h-40">
            <Image
              src={photo}
              alt={title}
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
            {year}
          </span>

          <div className="relative flex items-center gap-2">
            <span className="bg-orange h-1 w-6 rounded-full" />
            <span className="font-iranYekan text-xs font-bold text-orange">دستاورد</span>
          </div>

          <h3 className="font-iranYekan relative mt-2.5 text-lg font-extrabold text-[#16205f] transition-colors duration-300 group-hover:text-primary sm:text-xl">
            {title}
          </h3>

          {/* Description */}
          <div className="relative mt-2">
            <p
              ref={descriptionRef}
              className="font-iranYekan line-clamp-1 text-sm leading-7 font-medium text-[#7d8fb3]"
            >
              {description}
            </p>

            {isTruncated && (
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 rounded-2xl z-20 flex w-32 items-center justify-end bg-[linear-gradient(to_left,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_26%,#ffffff_42%)]">
                <button
                  ref={readMoreRef}
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((open) => !open)}
                  className={readMoreClass}
                >
                  {isExpanded ? 'بستن' : 'مشاهده بیشتر'}
                  <ArrowRightIcon
                    size={12}
                    className="rotate-180 transition-transform duration-300 ease-out group-hover/read:-translate-x-0.5"
                  />
                </button>
              </div>
            )}
          </div>

          <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-dashed border-[#e6ecf5] pt-3.5">
            <span className="font-iranYekan flex items-center gap-1.5 text-xs font-extrabold text-primary">
              مشاهده گواهی
              <ArrowRightIcon
                className="rotate-[-135deg] transition-transform duration-500 ease-out group-hover:rotate-[-180deg]"
                size={14}
              />
            </span>

            <span className="font-yekanBakhFaNum text-xs font-bold text-[#adb8cc]">
              سال <span className="text-[#16205f]">{year}</span>
            </span>
          </div>
        </div>
      </div>

      {/* The whole card opens the certificate */}
      <Link
        href={photo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`مشاهده تصویر ${title} در تب جدید`}
        className="absolute inset-0 z-10 rounded-[26px] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
      />

      {/* Full description, floating over the card below */}
      {isTruncated && isExpanded && (
        <div ref={popoverRef} className="absolute inset-x-1 top-full z-30 mt-2.5">
          <div className="rounded-[22px] border border-[#dbe6ff] bg-white/90 p-4 shadow-[0_28px_60px_-24px_rgba(10,47,182,0.55)] ring-1 ring-white/60 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="bg-orange h-1 w-5 rounded-full" />
              <span className="font-iranYekan text-xs font-bold text-orange">توضیحات کامل</span>
            </div>

            <p className="font-iranYekan mt-2.5 max-h-56 overflow-y-auto text-sm leading-7 font-medium text-[#7d8fb3]">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
