'use client';

// Next Imports
import Image from 'next/image';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import { AdminProject } from '@/types/ProjectsType';

interface ProjectInfoModalContentProps {
  project: AdminProject;
}

const ProjectInfoModalContent = ({ project }: ProjectInfoModalContentProps) => {
  const photos = Array.isArray(project.photos) ? project.photos : [];
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];

  return (
    <div className="rtl space-y-5">
      {/* Photos Gallery */}
      {photos.length > 0 && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">تصاویر پروژه</h3>
          <div className="grid grid-cols-2 gap-3">
            {photos.map((photo, index) => (
              <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={photo}
                  alt={`${project.name} - تصویر ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">نام پروژه</h3>
        <p className="font-iranYekan text-lg text-gray-800">{project.name}</p>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">توضیحات</h3>
        <p className="font-iranYekan text-gray-700 leading-7">{project.description}</p>
      </div>

      {/* Category & Year & Views */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">دسته‌بندی</p>
          <p className="font-iranYekan font-semibold text-gray-800">{project.category}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">سال</p>
          <p className="font-yekanBakhFaNum font-semibold text-gray-800">{project.year}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">بازدید</p>
          <p className="font-yekanBakhFaNum font-semibold text-gray-800">{project.viewCount}</p>
        </div>
      </div>

      {/* Requester Name */}
      {project.requesterName && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">نام متقاضی</h3>
          <p className="font-iranYekan text-gray-700">{project.requesterName}</p>
        </div>
      )}

      {/* Project Link */}
      {project.projectLink && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">لینک پروژه</h3>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-all"
          >
            {project.projectLink}
          </a>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">تکنولوژی‌ها</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-orange/10 text-orange px-3 py-1 rounded-full font-iranYekan text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status */}
      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="font-iranYekan text-xs text-gray-500 mb-1">وضعیت</p>
        <p
          className={`font-iranYekan font-semibold ${
            project.isActive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {project.isActive ? 'فعال' : 'غیرفعال'}
        </p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">تاریخ ایجاد</p>
          <p className="font-yekanBakhFaNum text-sm text-gray-800">
            {formatDate(new Date(project.createdAt))}
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">آخرین ویرایش</p>
          <p className="font-yekanBakhFaNum text-sm text-gray-800">
            {formatDate(new Date(project.updatedAt))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModalContent;
