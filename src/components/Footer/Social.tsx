import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Social } from '@/@types/Social';

export const socials: Social[] = [
  {
    url: 'https://facebook.com',
    icon: <FaFacebookF size={20} />,
  },
  {
    url: 'https://twitter.com',
    icon: <FaTwitter size={20} />,
  },
  {
    url: 'https://www.youtube.com/',
    icon: <FaYoutube size={20} />,
  },
  {
    url: 'https://www.instagram.com/',
    icon: <FaInstagram size={20} />,
  },
];

export function Social() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {socials.map(({ icon, url }) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
