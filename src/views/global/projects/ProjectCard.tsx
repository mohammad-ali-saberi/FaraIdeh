'use client';

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Types
import { ProjectsType } from '@/types/ProjectsType';

// Components
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

// Actions
import { trackProjectView } from '@/app/actions/trackProjectView';

// Utils
import { normalizeUrl } from '@/utils/normalizeUrl';

const ProjectCard = ({
  id,
  name,
  description,
  photo,
  projectLink,
  requesterName,
  technologies,
  viewCount,
  year,
}: ProjectsType) => {
  const href = normalizeUrl(projectLink);
  const [hasViewed, setHasViewed] = useState(false);

  const technologyList = technologies
    ? technologies
        .split('|')
        .map((technology) => technology.trim())
        .filter(Boolean)
    : [];
  const views = Number(viewCount);

  useEffect(() => {
    const viewedProjects = JSON.parse(localStorage.getItem('viewedProjects') || '[]') as number[];
    setHasViewed(viewedProjects.includes(id));
  }, [id]);

  const handleProjectClick = async () => {
    if (hasViewed) return;

    try {
      const success = await trackProjectView(id);

      if (success) {
        const viewedProjects = JSON.parse(
          localStorage.getItem('viewedProjects') || '[]',
        ) as number[];

        if (!viewedProjects.includes(id)) {
          viewedProjects.push(id);
          localStorage.setItem('viewedProjects', JSON.stringify(viewedProjects));
          setHasViewed(true);
        }
      }
    } catch (error) {
      console.error('Failed to increment view count:', error);
    }
  };

  return (
    <div className="group relative rounded-[26px] border border-[#e9eef7] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_14px_34px_-20px_rgba(16,24,40,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_55px_-26px_rgba(10,47,182,0.45)]">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleProjectClick}
        className="block rounded-[22px] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px]">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />

          {/* Hairline that follows the rounded corners */}
          <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />

          {/* Year */}
          <div className="absolute top-3 right-3 flex items-center rounded-2xl border border-white/30 bg-white/15 px-3.5 py-1.5 backdrop-blur-md">
            <span className="font-yekanBakhFaNum text-sm font-bold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
              {year}
            </span>
          </div>

          {/* Views */}
          {views > 0 && (
            <div className="absolute right-3 bottom-3 flex items-center gap-1 rounded-2xl border border-white/30 bg-white/15 px-3 py-1.5 backdrop-blur-md">
              <span className="font-yekanBakhFaNum text-xs font-bold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                {viewCount}
              </span>
              <span className="font-iranYekan text-[11px] text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                بازدید
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="rtl px-2 pt-5 pb-7">
          <h3 className="font-iranYekan line-clamp-1 text-lg font-extrabold text-[#16205f] transition-colors duration-300 group-hover:text-primary sm:text-xl">
            {name}
          </h3>

          {description && (
            <p className="font-iranYekan mt-2 line-clamp-2 text-sm leading-7 font-medium text-[#7d8fb3]">
              {description}
            </p>
          )}

          {technologyList.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {technologyList.slice(0, 3).map((technology) => (
                <span
                  key={technology}
                  className="font-iranYekan rounded-full border border-[#e8eef8] bg-[#f5f8fd] px-3 py-1 text-[11px] font-semibold text-[#6B7A99]"
                >
                  {technology}
                </span>
              ))}

              {technologyList.length > 3 && (
                <span className="font-yekanBakhFaNum rounded-full border border-[#e8eef8] bg-white px-2.5 py-1 text-[11px] font-bold text-[#adb8cc]">
                  +{technologyList.length - 3}
                </span>
              )}
            </div>
          )}

          {requesterName && (
            <p className="font-iranYekan mt-5 line-clamp-1 border-t border-dashed border-[#e6ecf5] pt-4 text-xs text-[#adb8cc]">
              درخواست‌کننده: <span className="font-semibold text-[#6B7A99]">{requesterName}</span>
            </p>
          )}
        </div>

        {/* Arrow */}
        <div className="absolute -bottom-7 left-7 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white transition-all duration-500 ease-out group-hover:scale-110">
          <ArrowRightIcon
            className="rotate-[-135deg] transition-transform duration-500 ease-out group-hover:rotate-[-180deg]"
            size={22}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
