import { getSocialMedia } from '@/app/actions/getSocialMedia';
import { SocialMediaProvider } from '@/context/SocialMediaContext';

export default async function GlobalLayout({ children }: { children: React.ReactNode }) {
  const socialMedia = await getSocialMedia();

  return <SocialMediaProvider socialMedia={socialMedia}>{children}</SocialMediaProvider>;
}
