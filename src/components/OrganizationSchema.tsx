import { categoryLabels, PROJECT_CATEGORIES } from '@/features/projects/categories';
import { SITE_URL } from '@/libs/siteConfig';

/** Persian service labels, reused from the project category source of truth. */
const services = Object.values(PROJECT_CATEGORIES)
  .filter((category) => category !== PROJECT_CATEGORIES.all)
  .map((category) => categoryLabels[category]);

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'فراایده',
    alternateName: 'FaraIdeh',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/og-image.png`,
    description: 'تیم توسعه نرم‌افزار و استارتاپی فراایده',
    knowsAbout: services,
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+989335942415',
      contactType: 'customer service',
      availableLanguage: ['Persian', 'fa'],
    },

    sameAs: [
      'https://www.instagram.com/mohammad_ali_saberi87', // Instagram
      'https://linkedin.com/in/mohammad-ali-saberi', // LinkedIn
      'https://github.com/mohammad-ali-saberi', // Github
      'https://t.me/FaraidehSupport', // Telegram
    ],

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Iran',
      addressCountry: 'IR',
    },

    founder: {
      '@type': 'Person',
      name: 'Seyyed Mohammad Ali Saberi Postchi',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
