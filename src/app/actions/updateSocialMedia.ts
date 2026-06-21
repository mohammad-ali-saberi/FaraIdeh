'use server';

import { prisma } from '@/libs/prisma';
import { SocialMediaData } from '@/types/SocialMediaType';

export const updateSocialMedia = async (data: SocialMediaData) => {
  let socialMedia = await prisma.socialMedia.findFirst();

  if (!socialMedia) {
    socialMedia = await prisma.socialMedia.create({ data });
  } else {
    socialMedia = await prisma.socialMedia.update({
      where: { id: socialMedia.id },
      data,
    });
  }

  return socialMedia;
};
