type ContactInfo = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  telegramHandle: string;
  telegramUrl: string;
  workingHours: string;
  responseTime: string;
  location: string;

  /** Registered business identity, shown on the contact page. */
  legalName: string;
  nationalId: string;
  registrationNumber: string;
  address: string;
  postalCode: string;
};

/** Longest message accepted by the contact forms, in characters. */
export const CONTACT_MESSAGE_MAX_LENGTH = 1000;

export const CONTACT_INFO: ContactInfo = {
  phoneDisplay: '09212753813',
  phoneHref: '+989212753813',
  email: 'info@fara-ideh.ir',
  telegramHandle: '@FaraidehSupport',
  telegramUrl: 'https://t.me/FaraidehSupport',
  workingHours: 'شنبه تا پنجشنبه، ۹ تا ۱۸',
  responseTime: 'کمتر از ۲۴ ساعت کاری',
  location: 'ایران — همکاری حضوری و دورکاری',

  legalName: 'فراایده',
  nationalId: '',
  registrationNumber: '',
  address: '',
  postalCode: '',
};
