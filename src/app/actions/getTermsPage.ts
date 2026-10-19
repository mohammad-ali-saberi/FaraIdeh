'use server';

import { prisma } from '@/libs/prisma';
import { DEFAULT_TERMS_CONTENT, DEFAULT_TERMS_TITLE } from '@/libs/termsContent';

export const getTermsPage = async () => {
  let terms = await prisma.termsPage.findFirst();

  if (!terms) {
    terms = await prisma.termsPage.create({
      data: {
        title: DEFAULT_TERMS_TITLE,
        content: DEFAULT_TERMS_CONTENT,
      },
    });
  }

  return terms;
};
