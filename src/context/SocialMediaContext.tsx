'use client';

import { createContext, useContext } from 'react';
import { SocialMediaData } from '@/types/SocialMediaType';

const SocialMediaContext = createContext<SocialMediaData>({
  githubLink: '',
  linkedinLink: '',
  instagramLink: '',
  telegramLink: '',
});

export const SocialMediaProvider = ({
  children,
  socialMedia,
}: {
  children: React.ReactNode;
  socialMedia: SocialMediaData;
}) => {
  return <SocialMediaContext.Provider value={socialMedia}>{children}</SocialMediaContext.Provider>;
};

export const useSocialMedia = () => useContext(SocialMediaContext);
