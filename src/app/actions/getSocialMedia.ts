'use server';

import { prisma } from '@/libs/prisma';

export const getSocialMedia = async () => {
  let socialMedia = await prisma.socialMedia.findFirst();

  if (!socialMedia) {
    socialMedia = await prisma.socialMedia.create({
      data: {
        githubLink: '',
        linkedinLink: '',
        instagramLink: '',
        telegramLink: '',
      },
    });
  }

  return socialMedia;
};
