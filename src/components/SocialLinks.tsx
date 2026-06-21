// Next Imports
import Link from 'next/link';

// Component
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import LinkedInIcon from './icons/LinkedInIcon';

// Types
import { SocialMediaData } from '@/types/SocialMediaType';

interface SocialLinksProps {
  socialMedia: SocialMediaData;
  size?: number | string;
  colorClass?: string;
  className?: string;
  direction?: 'row' | 'col';
}

const SocialLinks = ({
  socialMedia,
  size = 18,
  colorClass = 'text-[#4C4C4C]',
  className = '',
  direction = 'row',
}: SocialLinksProps) => {
  const { githubLink, linkedinLink, instagramLink, telegramLink } = socialMedia;

  return (
    <ul className={`flex ${direction === 'col' ? 'flex-col' : ''} items-center gap-3 ${className}`}>
      {/* Github Link */}
      {githubLink && (
        <li>
          <Link href={githubLink} className="group" target="_blank">
            <GitHubIcon size={size} className={`${colorClass} transition-all duration-200`} />
          </Link>
        </li>
      )}

      {/* Instagram Link */}
      {instagramLink && (
        <li>
          <Link href={instagramLink} className="group" target="_blank">
            <InstagramIcon size={size} className={`${colorClass} transition-all duration-200`} />
          </Link>
        </li>
      )}

      {/* Telegram Link */}
      {telegramLink && (
        <li>
          <Link href={telegramLink} className="group" target="_blank">
            <TelegramIcon
              size={String(size)}
              className={`${colorClass} transition-all duration-200`}
            />
          </Link>
        </li>
      )}

      {/* LinkedIn Link */}
      {linkedinLink && (
        <li>
          <Link href={linkedinLink} className="group" target="_blank">
            <LinkedInIcon size={size} className={`${colorClass} transition-all duration-200`} />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default SocialLinks;
