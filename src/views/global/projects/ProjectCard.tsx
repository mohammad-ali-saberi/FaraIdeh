'use client';

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Types
import { ProjectsType } from '@/types/ProjectsType';

// Components
import EyeIcon from '@/components/icons/EyeIcon';

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
    <div className="group rounded-2xl overflow-hidden shadow-md relative ltr">
      <Link href={href} target="_blank" rel="noopener noreferrer" onClick={handleProjectClick}>
        <div className="relative w-full h-72 overflow-hidden flex flex-row-reverse justify-end">
          <Image
            src={photo}
            alt="ProjectImage"
            fill
            className="absolute object-cover object-center -z-10"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="w-20 h-11 pt-1 font-semibold flex items-center justify-center ml-2 mt-6 rounded-[8px] bg-black/50 font-yekanBakhFaNum text-white">
            <p>{year}</p>
          </div>

          <div className="w-20 h-11 font-semibold flex flex-row-reverse items-center justify-center gap-2 ml-6 mt-6 rounded-[8px] bg-black/50 font-yekanBakhFaNum text-white">
            <EyeIcon />
            <p className="pt-1">{viewCount}</p>
          </div>
        </div>
        <div className="py-5 px-7 rtl">
          <p className="text-[#6B7A99] font-iranYekan font-extrabold text-xl line-clamp-1">
            {name}
          </p>
          <p className="text-[#ADB8CC] font-iranYekan font-medium mt-2 leading-8 line-clamp-2">
            {description}
          </p>
          {requesterName && (
            <p className="text-[#ADB8CC] font-iranYekan mt-3">{`درخواست کننده: ${requesterName}`}</p>
          )}
          {technologies && <p className="text-[#ADB8CC] font-semibold mt-3">{technologies}</p>}
        </div>

        <div className="absolute bg-black w-full h-full top-0 left-0 opacity-0 group-hover:opacity-60 transition-all duration-200 rounded-2xl flex items-center justify-center"></div>

        <button className="text-white font-iranYekan bg-orange px-4 py-3 rounded cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          مشاهده پروژه
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
