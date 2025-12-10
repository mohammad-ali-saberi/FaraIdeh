'use client';

// Components
import Container from '@/component/Container';
import SmallLabel from '@/component/SmallLabel';
import LargeLabel from '@/component/LargeLabel';
import HomeServicesDecoration from '@/component/icons/SVG/HomeServicesDecoration';
import WebsiteDesign from './services/WebsiteDesign';
import StartUp from './services/StartUp';
import ApplicationDesign from './services/ApplicationDesign';
import InstagramManagement from './services/InstagramManagement';
import UiUxDesign from './services/UiUxDesign';
import ContentManagement from './services/ContentManagement';

const Services = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-0">
        <SmallLabel title="SERVICES" color="#3361FF" bgColor="#EBF0FF" />
        <LargeLabel label="SERVICES" subLabel="هرآنچه برای دیده‌شدنِ مؤثر لازم دارید" />

        <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
          وب‌سایت‌های سریع، تجربه‌های کاربری دقیق و محتوای هدفمند؛ سرویس‌های ما طوری کنار هم چیده
          شده‌اند که مسیر رشد برند شما کوتاه‌تر شود.
        </p>

        {/* Decorative SVG - hidden on mobile */}
        <div className="hidden xl:block absolute bottom-6 left-32 2xl:left-60">
          <HomeServicesDecoration />
        </div>
      </div>

      {/* Services Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rtl gap-0 sm:gap-6 lg:gap-8 xl:gap-x-52 mt-2 sm:mt-10 md:mt-14 px-4 sm:px-0">
        <WebsiteDesign />
        <StartUp />
        <ApplicationDesign />
        <InstagramManagement />
        <UiUxDesign />
        <ContentManagement />
      </div>
    </Container>
  );
};

export default Services;
