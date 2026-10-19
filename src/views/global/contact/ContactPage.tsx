// Components
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import ContactMethods from './ContactMethods';
import HeroSection from './HeroSection';
import QuickLinks from './QuickLinks';

const ContactPageWrapper = () => {
  return (
    <>
      <HeroSection />

      <section className="relative mt-12 bg-[linear-gradient(180deg,#f7f9fd_0%,#ffffff_100%)] py-12 lg:mt-16 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#e9eef7]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e9eef7]" />

        <Container>
          <div className="rtl grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-7">
            <ContactMethods />
            <ContactForm />
          </div>
        </Container>
      </section>

      <QuickLinks />
      <Footer />
    </>
  );
};

export default ContactPageWrapper;
