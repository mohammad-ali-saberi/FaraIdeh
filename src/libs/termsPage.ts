import { prisma } from '@/libs/prisma';
import { DEFAULT_TERMS_CONTENT, DEFAULT_TERMS_TITLE } from '@/libs/termsContent';

export type TermsPageContent = {
  title: string;
  content: string;
  updatedAt: Date | null;
};

/**
 * Public read for the terms page. Before the admin has saved anything — or
 * when the database is unreachable — the seeded Markdown is used instead of
 * failing the whole route.
 */
export const getTermsPageContent = async (): Promise<TermsPageContent> => {
  try {
    const terms = await prisma.termsPage.findFirst();

    if (terms) return terms;
  } catch (error) {
    console.error('Failed to load terms page:', error);
  }

  return {
    title: DEFAULT_TERMS_TITLE,
    content: DEFAULT_TERMS_CONTENT,
    updatedAt: null,
  };
};
