// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import Container from '@/components/Container';
import LargeLabel from '@/components/LargeLabel';
import SmallLabel from '@/components/SmallLabel';
import DownloadIcon from '@/components/icons/DownloadIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import AboutOurTeamDecoration from '@/components/icons/SVG/AboutOurTeamDecoration';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

const socialChipClass =
  'flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 ease-out hover:bg-white hover:text-[#16205f] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none';

const resumeButtonClass =
  'font-iranYekan flex w-full items-center justify-center gap-2 rounded-full border border-[#dbe6ff] bg-[#f0f5ff] px-4 py-2.5 text-sm font-extrabold text-primary transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_12px_26px_-14px_rgba(10,47,182,0.75)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none';

const TeamMemberCard = ({ member, priority }: { member: TeamMemberType; priority: boolean }) => {
  const socials = [
    { key: 'github', href: member.githubLink, label: 'گیت‌هاب', Icon: GitHubIcon },
    { key: 'instagram', href: member.instagramLink, label: 'اینستاگرام', Icon: InstagramIcon },
    { key: 'linkedin', href: member.linkedinLink, label: 'لینکدین', Icon: LinkedInIcon },
  ].filter((social): social is typeof social & { href: string } => Boolean(social.href));

  const jobTitles = member.jobTitles?.length ? member.jobTitles.join(' • ') : 'عضو تیم فراایده';

  return (
    <div className="group relative flex h-full flex-col rounded-[26px] border border-[#e9eef7] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_14px_34px_-20px_rgba(16,24,40,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_55px_-26px_rgba(10,47,182,0.4)]">
      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[18px] bg-[#eef4ff]">
        <Image
          src={member.photo}
          alt={member.fullName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          priority={priority}
        />

        {/* Hairline that follows the rounded corners */}
        <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />

        {socials.length > 0 && (
          <>
            {/* Scrim so the chips stay legible on bright photos */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(4,10,30,0.7),transparent)]" />

            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              {socials.map(({ key, href, label, Icon }) => (
                <Link
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${member.fullName}`}
                  className={socialChipClass}
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="rtl flex flex-1 flex-col px-2 pt-5 pb-2">
        <div className="bg-orange h-1 w-9 rounded-full" />

        <h3 className="font-iranYekan mt-3 text-lg font-extrabold text-[#16205f] transition-colors duration-300 group-hover:text-primary sm:text-xl">
          {member.fullName}
        </h3>

        <p className="font-iranYekan mt-2 mb-5 line-clamp-2 text-sm leading-7 font-medium text-[#7d8fb3]">
          {jobTitles}
        </p>

        {/* Resume */}
        {member.resumeFile && (
          <div className="mt-auto border-t border-dashed border-[#e6ecf5] pt-4">
            <Link
              href={member.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`مشاهده و دانلود رزومه ${member.fullName}`}
              className={resumeButtonClass}
            >
              <DownloadIcon size={18} />
              مشاهده رزومه
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const OurTeam = ({ members }: { members: TeamMemberType[] }) => {
  return (
    <div className="relative w-full" id="ourteam">
      <Container>
        <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 rtl">
          <SmallLabel title="OUR TEAM" color="#FF6633" bgColor="#FFF0EB" />
          <LargeLabel label="OUR TEAM" subLabel="تیم فراایده" />

          <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
            ما کنار هم مسئله را می‌شناسیم، راه‌حل می‌سازیم و با بازخورد واقعی بهترش می‌کنیم <br />{' '}
            تیمی همدل برای خروجی‌های پایدار و قابل اعتماد.
          </p>

          <div className="grid w-full grid-cols-1 gap-6 mt-10 lg:mt-16 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {members?.length === 0 && (
              <div className="col-span-full rounded-2xl border border-[#e9eef7] bg-white px-6 py-5 text-center font-iranYekan text-sm font-medium text-[#7d8fb3]">
                هنوز عضوی ثبت نشده است.
              </div>
            )}

            {members?.map((m, idx) => {
              const centerIfSingle = members.length === 1 ? 'xl:col-start-2' : '';

              return (
                <div key={m.id} className={`col-span-1 ${centerIfSingle}`}>
                  <TeamMemberCard member={m} priority={idx < 2} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="absolute top-20 left-0 hidden xl:block">
        <AboutOurTeamDecoration />
      </div>
    </div>
  );
};

export default OurTeam;
