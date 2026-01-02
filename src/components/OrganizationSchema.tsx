export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فراایده',
    alternateName: 'FaraIdeh',
    url: 'https://fara-ideh.ir',
    logo: 'https://fara-ideh.ir/images/logo.png',
    description: 'تیم توسعه نرم‌افزار و استارتاپی فراایده',

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+989335942415',
      contactType: 'customer service',
      availableLanguage: ['Persian', 'fa'],
    },

    sameAs: [
      'https://www.instagram.com/mohammad_ali_saberi87', // Instagram
      'https://linkedin.com/in/mohammad-ali-saberi', // LinkedIn
      'https://github.com/sb878787', // Github
      'https://web.telegram.org/k/#@M_sb87_Developer', // Telegram
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
