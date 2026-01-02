'use client';

// React Imports
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import PlusIcon from '@/components/icons/blogs/PlusIcon';
import Input from '@/components/Input';
import Toast from '@/components/Toast';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import {
  AdminTeamMember,
  UpdateTeamMemberInput,
  UpdateTeamMemberResponse,
} from '@/types/TeamMemberType';

interface ITeamMemberFormData {
  photo: string;
  firstName: string;
  lastName: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  resumeFile: string;
}

interface EditTeamMemberFormProps {
  member: AdminTeamMember;
  updateTeamMemberAction: (data: UpdateTeamMemberInput) => Promise<UpdateTeamMemberResponse>;
}

const EditTeamMemberForm = ({ member, updateTeamMemberAction }: EditTeamMemberFormProps) => {
  const router = useRouter();
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const [formData, setFormData] = useState<ITeamMemberFormData>({
    photo: '',
    firstName: '',
    lastName: '',
    githubLink: '',
    linkedinLink: '',
    instagramLink: '',
    resumeFile: '',
  });

  const createdDate = useMemo(() => formatDate(member.createdAt), [member.createdAt]);

  // Initialize form with member data
  useEffect(() => {
    setFormData({
      photo: member.photo,
      firstName: member.firstName,
      lastName: member.lastName,
      githubLink: member.githubLink || '',
      linkedinLink: member.linkedinLink || '',
      instagramLink: member.instagramLink || '',
      resumeFile: member.resumeFile || '',
    });

    // Set job titles (ensure at least one empty field)
    setJobTitles(member.jobTitles.length > 0 ? member.jobTitles : ['']);
  }, [member]);

  const handleAddJobTitles = () => {
    setJobTitles([...jobTitles, '']);
  };

  const handleChangeJobTitles = (value: string, index: number) => {
    const updated = [...jobTitles];
    updated[index] = value;
    setJobTitles(updated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Filter empty job titles
      const filteredJobTitles = jobTitles.filter((title) => title.trim() !== '');

      // Validation
      if (!formData.photo.trim()) {
        showToast('لطفاً لینک عکس را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (!formData.firstName.trim()) {
        showToast('لطفاً نام را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (!formData.lastName.trim()) {
        showToast('لطفاً نام خانوادگی را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (filteredJobTitles.length === 0) {
        showToast('لطفاً حداقل یک عنوان شغلی وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      const teamMemberData: UpdateTeamMemberInput = {
        id: member.id,
        photo: formData.photo,
        firstName: formData.firstName,
        lastName: formData.lastName,
        jobTitles: filteredJobTitles,
        githubLink: formData.githubLink.trim() || null,
        linkedinLink: formData.linkedinLink.trim() || null,
        instagramLink: formData.instagramLink.trim() || null,
        resumeFile: formData.resumeFile.trim() || null,
      };

      // Send to server
      const result = await updateTeamMemberAction(teamMemberData);

      if (result.success) {
        showToast(result.message, 'success');

        // Redirect to team members list after 1 second
        setTimeout(() => {
          router.push('/admin/ourteam');
        }, 1000);
      } else {
        showToast(result.message, 'error');
      }
    } catch (error) {
      console.error('Error updating team member:', error);
      showToast('خطایی غیرمنتظره رخ داد. لطفاً دوباره تلاش کنید.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 rtl w-full gap-x-14 gap-y-8"
        >
          {/* Photo */}
          <div className="col-span-2">
            <Input
              type="text"
              name="photo"
              id="photo"
              placeholder=" "
              required={true}
              label="لینک عکس"
              htmlFor="photo"
              value={formData.photo}
              onChange={handleInputChange}
            />
          </div>

          {/* First Name */}
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            required={true}
            label="نام"
            htmlFor="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          {/* Last Name */}
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            required={true}
            label="نام خانوادگی"
            htmlFor="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          {/* Job Titles */}
          {jobTitles.map((jobTitle, index) => (
            <Input
              key={index}
              type="text"
              name={`jobTitle-${index}`}
              id={`jobTitle-${index}`}
              placeholder=" "
              label={`عنوان شغلی ${index + 1}`}
              htmlFor={`jobTitle-${index}`}
              value={jobTitle}
              onChange={(e) => handleChangeJobTitles(e.target.value, index)}
            />
          ))}

          {/* Add Job Titles Input Button */}
          <button
            type="button"
            onClick={handleAddJobTitles}
            className="w-16 h-16 flex items-center outline-none justify-center bg-white shadow-md shadow-[#EDEFF1] rounded-lg cursor-pointer border-2 border-transparent hover:border-[#7D8FB3] hover:bg-transparent transition-all duration-200"
          >
            <PlusIcon size="20" className="text-[#7D8FB3]" />
          </button>

          {/* Github Link */}
          <Input
            type="text"
            name="githubLink"
            id="githubLink"
            placeholder=" "
            label="لینک گیت هاب (اختیاری)"
            htmlFor="githubLink"
            value={formData.githubLink}
            onChange={handleInputChange}
          />

          {/* Linkedin Link */}
          <Input
            type="text"
            name="linkedinLink"
            id="linkedinLink"
            placeholder=" "
            label="لینک لینکدین (اختیاری)"
            htmlFor="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleInputChange}
          />

          {/* Instagram Link */}
          <Input
            type="text"
            name="instagramLink"
            id="instagramLink"
            placeholder=" "
            label="لینک اینستاگرام (اختیاری)"
            htmlFor="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
          />

          {/* Resume File Link */}
          <Input
            type="text"
            name="resumeFile"
            id="resumeFile"
            placeholder=" "
            label="لینک فایل رزومه (اختیاری)"
            htmlFor="resumeFile"
            value={formData.resumeFile}
            onChange={handleInputChange}
          />

          {/* Created Date */}
          <Input
            type="text"
            name="date"
            id="date"
            placeholder=" "
            label={`تاریخ ایجاد: ${createdDate}`}
            htmlFor="date"
            disabled={true}
          />

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/ourteam')}
              className="px-8 py-4 bg-gray-400 font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-gray-600 hover:border-transparent hover:translate-y-1 transition-all duration-200"
              disabled={isSubmitting}
            >
              انصراف
            </button>

            <button
              type="submit"
              className="px-8 py-4 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'در حال به‌روزرسانی...' : 'به‌روزرسانی اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTeamMemberForm;
