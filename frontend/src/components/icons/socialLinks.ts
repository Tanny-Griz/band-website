import type { BrandIconName } from './BrandIcon'

export const socialLinks = [
  {
    href: 'https://open.spotify.com',
    label: 'Spotify',
    icon: 'spotify',
  },
  {
    href: 'https://music.apple.com',
    label: 'Apple Music',
    icon: 'appleMusic',
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: 'instagram',
  },
  {
    href: 'https://www.youtube.com',
    label: 'YouTube',
    icon: 'youtube',
  },
] satisfies { href: string; label: string; icon: BrandIconName }[]
