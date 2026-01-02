'use client';

// React Imports
import { useState, useTransition } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Components
import TeamMemberInfoModalContent from '@/components/dashboard/TeamMemberInfoModalContent';
import EditIcon from '@/components/icons/blogs/EditIcon';
import InformationIcon from '@/components/icons/blogs/InformationIcon';
import PlusIcon from '@/components/icons/blogs/PlusIcon';
import TrashIcon from '@/components/icons/dashboard/TrashIcon';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import WifiLoader from '@/components/WifiLoader';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

interface TeamMembersListProps {
  teamMembers: TeamMemberType[];
  onDelete: (id: number) => Promise<{ success: boolean; message: string }>;
}

const TeamMembersList = ({ teamMembers, onDelete }: TeamMembersListProps) => {
  const router = useRouter();
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [memberList, setMemberList] = useState<TeamMemberType[]>(teamMembers);
  const [isPending, startTransition] = useTransition();
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  const openMemberInfo = (member: TeamMemberType) => {
    setSelectedMember(member);
    setIsInfoModalOpen(true);
  };

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedId) return;

    try {
      const result = await onDelete(selectedId);

      if (result.success) {
        // Optimistically update UI
        setMemberList(memberList.filter((m) => m.id !== selectedId));
        showToast('عضو تیم با موفقیت حذف شد', 'success');

        // Refresh server data
        startTransition(() => {
          router.refresh();
        });
      } else {
        showToast(result.message || 'خطا در حذف عضو تیم', 'error');
      }
    } catch (error) {
      showToast('خطا در حذف عضو تیم', 'error');
    } finally {
      setDeleteModal(false);
      setSelectedId(null);
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      <div className="px-12 mt-12 relative">
        <div className="h-176 overflow-y-scroll grid grid-cols-3 gap-y-9 gap-x-12 pb-2">
          {memberList.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center h-full">
              <Image
                src="https://s6.uupload.ir/files/image_8_mict-removebg-preview_kxug.png"
                alt="EmptyImage"
                width={300}
                height={300}
              />
              <p className="font-iranYekan text-[#BCBCBC] text-xl">
                هیچ عضوی در تیم ایجاد نشده است!
              </p>
            </div>
          ) : (
            memberList.map((member) => (
              <div key={member.id} className="bg-white shadow rounded-xl h-165 relative">
                {/* Image TeamMembers */}
                <div className="relative w-full h-120 overflow-hidden rounded-t-xl">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.fullName}
                      fill
                      className="object-center object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-iranYekan">بدون تصویر</span>
                    </div>
                  )}
                </div>

                {/* Detail */}
                <div className="px-6 pt-5">
                  {/* Full Name */}
                  <p className="text-[#6B7A99] font-iranYekan font-extrabold text-2xl line-clamp-1">
                    {member.fullName}
                  </p>

                  {/* Job Titles */}
                  <p className="line-clamp-1 text-[#ADB8CC] font-iranYekan leading-8 mt-2">
                    {member.jobTitles.length > 0 ? member.jobTitles.join(' • ') : 'بدون عنوان شغلی'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-5 px-6 absolute bottom-7 w-full">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteClick(member.id)}
                    disabled={isPending}
                    className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <TrashIcon
                      size="24"
                      className="text-primary group-hover:text-white transition-all duration-200"
                    />
                    حذف
                  </button>

                  {/* Edit Button */}
                  <Link
                    href={`/admin/ourteam/edit/${member.id}`}
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
                    onClick={() => openMemberInfo(member)}
                    className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <InformationIcon
                      size="24"
                      className="text-primary group-hover:text-white transition-all duration-200"
                    />
                    اطلاعات
                  </button>
                </div>

                {/* Loading Overlay */}
                {isPending && (
                  <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-xl">
                    <WifiLoader />
                  </div>
                )}
              </div>
            ))
          )}

          {/* Add Button */}
          <div className="absolute bottom-0 right-5 z-10">
            <Link href="/admin/ourteam/add">
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

      {/* Team Member Info Modal */}
      {selectedMember && (
        <Modal
          isOpen={isInfoModalOpen}
          onClose={() => {
            setIsInfoModalOpen(false);
            setSelectedMember(null);
          }}
          title={`اطلاعات عضو تیم: ${selectedMember.fullName}`}
          size="lg"
          actions={[
            {
              label: 'بستن',
              onClick: () => {
                setIsInfoModalOpen(false);
                setSelectedMember(null);
              },
              variant: 'secondary',
            },
          ]}
        >
          <TeamMemberInfoModalContent member={selectedMember} />
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="حذف عضو تیم"
        size="sm"
        actions={[
          {
            label: 'انصراف',
            onClick: () => setDeleteModal(false),
            variant: 'secondary',
          },
          {
            label: isPending ? 'در حال حذف...' : 'بله، حذف شود',
            onClick: handleDeleteConfirm,
            variant: 'danger',
          },
        ]}
      >
        <p className="font-iranYekan text-[#ADB8CC] leading-8">
          آیا از حذف این عضو تیم اطمینان دارید؟ این عملیات قابل بازگشت نیست.
        </p>
      </Modal>
    </>
  );
};

export default TeamMembersList;
