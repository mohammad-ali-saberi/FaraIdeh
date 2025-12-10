'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Icons
import GitHubIcon from '@/component/icons/GitHubIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import InstagramIcon from '@/component/icons/InstagramIcon';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

interface TeamMemberInfoModalContentProps {
  member: TeamMemberType;
}

const TeamMemberInfoModalContent = ({ member }: TeamMemberInfoModalContentProps) => {
  return (
    <div className="rtl space-y-5">
      {/* Profile Photo */}
      {member.photo && (
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={member.photo}
            alt={member.fullName}
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Full Name */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">نام و نام خانوادگی</h3>
        <p className="font-iranYekan text-xl font-semibold text-gray-800">{member.fullName}</p>
      </div>

      {/* Job Titles */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">عناوین شغلی</h3>
        {member.jobTitles.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {member.jobTitles.map((title, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full font-iranYekan text-sm"
              >
                {title}
              </span>
            ))}
          </div>
        ) : (
          <p className="font-iranYekan text-red-600">عنوان شغلی ثبت نشده است</p>
        )}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">لینک‌های اجتماعی</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* GitHub */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GitHubIcon size="20" className="text-gray-600" />
              <p className="font-iranYekan text-xs text-gray-500">گیت‌هاب</p>
            </div>
            {member.githubLink ? (
              <Link
                href={member.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all font-iranYekan"
              >
                مشاهده پروفایل
              </Link>
            ) : (
              <p className="text-red-600 text-sm font-iranYekan">ثبت نشده</p>
            )}
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <LinkedInIcon size="20" className="text-gray-600" />
              <p className="font-iranYekan text-xs text-gray-500">لینکدین</p>
            </div>
            {member.linkedinLink ? (
              <Link
                href={member.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all font-iranYekan"
              >
                مشاهده پروفایل
              </Link>
            ) : (
              <p className="text-red-600 text-sm font-iranYekan">ثبت نشده</p>
            )}
          </div>

          {/* Instagram */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <InstagramIcon size="20" className="text-gray-600" />
              <p className="font-iranYekan text-xs text-gray-500">اینستاگرام</p>
            </div>
            {member.instagramLink ? (
              <Link
                href={member.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all font-iranYekan"
              >
                مشاهده پروفایل
              </Link>
            ) : (
              <p className="text-red-600 text-sm font-iranYekan">ثبت نشده</p>
            )}
          </div>
        </div>
      </div>

      {/* Resume File */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">رزومه</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          {member.resumeFile ? (
            <Link
              href={member.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-iranYekan flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              دانلود یا مشاهده رزومه
            </Link>
          ) : (
            <p className="text-red-600 font-iranYekan">فایل رزومه آپلود نشده است.</p>
          )}
        </div>
      </div>

      {/* ID */}
      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="font-iranYekan text-xs text-gray-500 mb-1">شناسه (ID)</p>
        <p className="font-yekanBakhFaNum font-semibold text-gray-800">{member.id}</p>
      </div>
    </div>
  );
};

export default TeamMemberInfoModalContent;
