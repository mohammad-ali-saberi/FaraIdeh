// Components
import Container from '@/components/Container';
import AchievementCard from './AchievementCard';

// Types
import type { AchievementType } from '@/types/AchievementType';

const Achievements = ({ achievements }: { achievements: AchievementType[] }) => {
  return (
    <div id="achievements">
      <Container>
        <div className="rtl">
          <div className="bg-orange h-1 w-12 rounded-full" />

          <p className="font-iranYekan mt-3 text-xl leading-8 font-semibold md:text-2xl lg:text-3xl lg:leading-12">
            دستاوردها و جوایزِ مسیرِ رشد ما
          </p>
        </div>

        {!achievements?.length ? (
          <p className="rtl mt-6 rounded-2xl border border-[#e9eef7] bg-white px-6 py-5 text-center font-iranYekan text-sm font-medium text-[#7d8fb3]">
            دستاوردی ثبت نشده!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 mt-8 rtl lg:gap-8 lg:mt-14 xl:grid-cols-2">
            {achievements.map((a) => (
              <div key={a.id} className="col-span-1">
                <AchievementCard achievement={a} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Achievements;
