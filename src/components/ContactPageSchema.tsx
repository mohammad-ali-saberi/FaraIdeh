import { CONTACT_INFO } from '@/libs/contactInfo';
import { SITE_NAME, SITE_URL } from '@/libs/siteConfig';

export default function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contactpage`,
    url: `${SITE_URL}/contact`,
    name: `تماس با ما | ${SITE_NAME}`,
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phoneHref,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phoneHref,
        email: CONTACT_INFO.email,
        contactType: 'customer service',
        availableLanguage: ['Persian', 'fa'],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
