// Components
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import HomeContactDecoration from '@/components/icons/SVG/HomeContactDecoration';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import HeroSection from './HeroSection';

// Utils
import { formatDate } from '@/utils/formatDate';

// Styles
import styles from './TermsPage.module.css';

interface TermsPageProps {
  title: string;
  content: string;
  updatedAt: Date | null;
}

const TermsPageWrapper = ({ title, content, updatedAt }: TermsPageProps) => {
  return (
    <>
      <HeroSection />

      <section className="relative mt-10 overflow-hidden bg-gray-50 py-14 lg:mt-14 lg:py-20">
        {/* Soft ambient shapes */}
        <div
          className="bg-primary/5 pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="bg-orange/5 pointer-events-none absolute -right-24 -bottom-40 h-96 w-96 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Existing site decorations to soften the side space */}
        <div
          className="pointer-events-none absolute top-10 right-40 hidden -scale-x-100 xl:block"
          aria-hidden="true"
        >
          <HomeContactDecoration />
        </div>

        <Container className="relative z-10">
          <article className="rtl shadow-primary/5 mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-lg">
            <header className="border-primary/10 bg-primary/5 flex flex-wrap items-center justify-between gap-3 border-b px-5 py-4 sm:px-8">
              <div className="flex items-center gap-2.5">
                <span className="bg-orange h-1 w-6 rounded-full" />
                <p className="font-iranYekan text-primary text-sm font-extrabold">{title}</p>
              </div>

              {updatedAt && (
                <span className="font-iranYekan text-text-description rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs">
                  آخرین به‌روزرسانی:{' '}
                  <span className="font-yekanBakhFaNum">{formatDate(updatedAt)}</span>
                </span>
              )}
            </header>

            <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-11">
              <div
                className={`font-iranYekan rtl mx-auto max-w-3xl text-sm sm:text-base ${styles.markdown}`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks]}
                  components={{
                    h1: ({ children }) => <h2>{children}</h2>,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default TermsPageWrapper;
