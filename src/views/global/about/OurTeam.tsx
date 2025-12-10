'use client';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';

// Components
import Container from '@/component/Container';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';
import GitHubIcon from '@/component/icons/GitHubIcon';
import InstagramIcon from '@/component/icons/InstagramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import AboutOurTeamDecoration from '@/component/icons/SVG/AboutOurTeamDecoration';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

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

          <div className="grid w-full grid-cols-1 gap-6 mt-10 lg:mt-16 lg:grid-cols-2 xl:grid-cols-3">
            {members?.length === 0 && (
              <div className="text-center text-sm col-span-full font-iranYekan bg-red-600 text-white py-2 rounded">
                هنوز عضوی ثبت نشده است.
              </div>
            )}

            {members?.map((m, idx) => {
              const centerIfSingle = members.length === 1 ? 'xl:col-start-2' : '';
              return (
                <div
                  key={m.id}
                  className={`relative w-full col-span-1 ${centerIfSingle} h-[500px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl`}
                >
                  <Image
                    src={m.photo}
                    alt={m.fullName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority={idx < 2}
                  />

                  <div className="bg-primary absolute bottom-0 w-full px-6 py-4 z-30">
                    <p className="text-white font-iranYekan font-semibold text-lg lg:text-xl">
                      {m.fullName}
                    </p>

                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-y-1">
                      <p className="text-white font-iranYekan text-sm pt-1 line-clamp-1">
                        {m.jobTitles?.length ? m.jobTitles.join(' • ') : 'Member'}
                      </p>

                      <div className="flex gap-3">
                        {m.githubLink && (
                          <Link href={m.githubLink} className="group" target="_blank">
                            <GitHubIcon className="text-white transition-transform duration-200 group-hover:scale-125 w-5 h-5" />
                          </Link>
                        )}
                        {m.instagramLink && (
                          <Link href={m.instagramLink} className="group" target="_blank">
                            <InstagramIcon className="text-white transition-transform duration-200 group-hover:scale-125 w-5 h-5" />
                          </Link>
                        )}
                        {m.linkedinLink && (
                          <Link href={m.linkedinLink} className="group" target="_blank">
                            <LinkedInIcon className="text-white transition-transform duration-200 group-hover:scale-125 w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
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
