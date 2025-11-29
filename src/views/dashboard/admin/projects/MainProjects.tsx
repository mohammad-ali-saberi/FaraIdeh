'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import CloseCircleIcon from '@/component/icons/blogs/CloseCircleIcon';
import EditIcon from '@/component/icons/blogs/EditIcon';
import EyeStrockIcon from '@/component/icons/blogs/EyeStrockIcon';
import InformationIcon from '@/component/icons/blogs/InformationIcon';
import UnlockIcon from '@/component/icons/blogs/UnlockIcon';
import LockIcon from '@/component/icons/blogs/LockIcon';
import TickCircleIcon from '@/component/icons/blogs/TickCircleIcon';
import PlusIcon from '@/component/icons/blogs/PlusIcon';
import Modal from '@/component/Modal';
import ProjectInfoModalContent from '@/component/dashboard/ProjectInfoModalContent';

// Types
import { AdminProject } from '@/types/ProjectsType';

// Actions
import { toggleProjectActive } from '@/app/actions/toggleProjectActive';

interface MainProjectsProps {
  projects: AdminProject[];
}

const MainProjects = ({ projects }: MainProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<AdminProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectList, setProjectList] = useState<AdminProject[]>(projects);
  const [loading, setLoading] = useState(false);

  const openProjectInfo = (project: AdminProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleToggleActive = async (project: AdminProject) => {
    setLoading(true);
    try {
      const result = await toggleProjectActive(project.id, project.isActive);
      if (result.success) {
        // Update local state
        setProjectList(
          projectList.map((p) => (p.id === project.id ? { ...p, isActive: !p.isActive } : p)),
        );
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-12 mt-12 relative">
        <div className="h-176 overflow-y-scroll grid grid-cols-3 gap-y-9 gap-x-12 pb-2">
          {projects.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center h-full">
              <Image
                src="https://s6.uupload.ir/files/image_8_mict-removebg-preview_kxug.png"
                alt="EmptyImage"
                width={300}
                height={300}
              />
              <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ پروژه‌ای ایجاد نشده است!</p>
            </div>
          ) : (
            projectList.map((project) => {
              const photos = Array.isArray(project.photos) ? project.photos : [];
              const mainPhoto = photos[0] || 'https://s6.uupload.ir/files/images_eusf.png';

              return (
                <div key={project.id} className="bg-white shadow rounded-xl h-130 relative">
                  {/* Image & Views & Active Status */}
                  <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
                    {/* Image */}
                    <Image
                      src={mainPhoto}
                      alt={project.name}
                      fill
                      className="object-center object-cover"
                    />

                    {/* Views */}
                    <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 right-5 z-20 px-4 py-2.5">
                      <EyeStrockIcon size="24" className="text-white" />
                      <span className="font-yekanBakhFaNum text-white font-medium">
                        {project.viewCount}
                      </span>
                    </div>

                    {/* Active Status */}
                    <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 right-30 z-20 px-3.5 py-2.5">
                      {project.isActive ? (
                        <>
                          <UnlockIcon size="20" className="text-white" />
                          <span className="font-yekanBakhFaNum text-white">فعال</span>
                        </>
                      ) : (
                        <>
                          <LockIcon size="20" className="text-white" />
                          <span className="font-yekanBakhFaNum text-white">غیر فعال</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="px-8 pt-7">
                    {/* Title */}
                    <p className="text-[#6B7A99] font-iranYekan font-extrabold text-2xl line-clamp-1">
                      {project.name}
                    </p>

                    {/* Description */}
                    <p className="line-clamp-2 text-[#ADB8CC] font-iranYekan leading-8 mt-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-5 px-8 absolute bottom-7 w-full">
                    {/* Active/Inactive Button */}
                    <button
                      onClick={() => handleToggleActive(project)}
                      disabled={loading}
                      className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      {project.isActive ? (
                        <>
                          <CloseCircleIcon
                            size="22"
                            className="text-primary group-hover:text-white transition-all duration-200"
                          />
                          غیر فعال
                        </>
                      ) : (
                        <>
                          <TickCircleIcon
                            size="22"
                            className="text-primary group-hover:text-white transition-all duration-200"
                          />
                          فعال
                        </>
                      )}
                    </button>

                    {/* Edit Button */}
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      <EditIcon
                        size="22"
                        className="text-primary group-hover:text-white transition-all duration-200"
                      />
                      ویرایش
                    </Link>

                    {/* Information Button */}
                    <button
                      onClick={() => openProjectInfo(project)}
                      className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      <InformationIcon
                        size="24"
                        className="text-primary group-hover:text-white transition-all duration-200"
                      />
                      اطلاعات
                    </button>
                  </div>
                </div>
              );
            })
          )}

          {/* Add Button */}
          <div className="absolute bottom-0 right-5 z-10">
            <Link href="/admin/projects/add">
              <div className="bg-primary rounded-full p-4 border-2 border-white group hover:bg-transparent hover:border-primary hover:-translate-y-1 transition-all duration-200">
                <PlusIcon
                  size="20"
                  className="text-white group-hover:text-primary transition-all duration-200"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Info Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
          title={`اطلاعات پروژه: ${selectedProject.name}`}
          size="lg"
          actions={[
            {
              label: 'بستن',
              onClick: () => {
                setIsModalOpen(false);
                setSelectedProject(null);
              },
              variant: 'secondary',
            },
          ]}
        >
          <ProjectInfoModalContent project={selectedProject} />
        </Modal>
      )}
    </>
  );
};

export default MainProjects;
