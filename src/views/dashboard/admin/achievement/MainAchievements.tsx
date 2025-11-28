'use client';

// React Imports
import { useState, useTransition } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Components
import EditIcon from '@/component/icons/blogs/EditIcon';
import PlusIcon from '@/component/icons/blogs/PlusIcon';
import TrashIcon from '@/component/icons/dashboard/TrashIcon';
import Modal from '@/component/Modal';
import Toast from '@/component/Toast';
import WifiLoader from '@/component/WifiLoader';

// Types
import { AchievementType } from '@/types/AchievementType';

// Actions
import { deleteAchievement } from '@/app/actions/getAchievements';

interface MainAchievementsProps {
  initialAchievements: AchievementType[];
}

const MainAchievements = ({ initialAchievements }: MainAchievementsProps) => {
  const router = useRouter();
  const [achievements, setAchievements] = useState<AchievementType[]>(initialAchievements);
  const [isPending, startTransition] = useTransition();
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedId) return;

    try {
      const result = await deleteAchievement(selectedId);

      if (result.success) {
        // Optimistically update UI
        setAchievements(achievements.filter((a) => a.id !== selectedId));
        showToast('دستاورد با موفقیت حذف شد', 'success');

        // Refresh server data
        startTransition(() => {
          router.refresh();
        });
      } else {
        showToast(result.message || 'خطا در حذف دستاورد', 'error');
      }
    } catch (error) {
      showToast('خطا در حذف دستاورد', 'error');
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
          {achievements.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center h-full">
              <Image
                src="https://s6.uupload.ir/files/image_8_mict-removebg-preview_kxug.png"
                alt="EmptyImage"
                width={300}
                height={300}
              />
              <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ دستاوردی ایجاد نشده است!</p>
            </div>
          ) : (
            achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white shadow rounded-xl h-114 relative">
                {/* Image & Year Achievement */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  {/* Image */}
                  <Image
                    src={achievement.photo}
                    alt={achievement.title}
                    fill
                    className="object-center object-cover"
                  />

                  {/* Year */}
                  <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 left-5 z-20 px-4 py-2">
                    <span className="font-yekanBakhFaNum text-white font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>

                {/* Detail */}
                <div className="px-8 pt-7">
                  {/* Title */}
                  <p className="text-[#6B7A99] font-iranYekan font-extrabold text-2xl line-clamp-1">
                    {achievement.title}
                  </p>

                  {/* Description */}
                  <p className="text-[#ADB8CC] font-iranYekan leading-8 mt-3 line-clamp-2">
                    {achievement.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-5 px-8 absolute bottom-7 w-full">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteClick(achievement.id)}
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
                    href={`/admin/achievement/edit/${achievement.id}`}
                    className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <EditIcon
                      size="22"
                      className="text-primary group-hover:text-white transition-all duration-200"
                    />
                    ویرایش
                  </Link>
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
            <Link href="/admin/achievement/add">
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

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="حذف دستاورد"
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
          آیا از حذف این دستاورد اطمینان دارید؟ این عملیات قابل بازگشت نیست.
        </p>
      </Modal>
    </>
  );
};

export default MainAchievements;
