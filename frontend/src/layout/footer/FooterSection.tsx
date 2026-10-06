import { BrandIcon, type BrandIconName } from '../../components/icons/BrandIcon'
import { useBand } from '../../hooks/useBand'
import './FooterSection.css'

const currentYear = new Date().getFullYear()

const footerLinks = [
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

export function FooterSection() {
  const { band } = useBand()
  const bandName = band?.bandName ?? 'Band Name'

  return (
    <footer className="site-footer">
      <div className="site-footer__inner section-container">
        <nav className="site-footer__socials" aria-label="Social and music links">
          {footerLinks.map(({ href, icon, label }) => (
            <a
              className="site-footer__link"
              href={href}
              key={label}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <BrandIcon name={icon} />
            </a>
          ))}
        </nav>

        <p className="site-footer__copyright">
          © {currentYear} {bandName}. All rights reserved.
        </p>

        <p className="site-footer__credit">
          Created by{' '}
          <a href="https://okwebdev.com" target="_blank" rel="noreferrer">
            okwebdev.com
          </a>
        </p>
      </div>
    </footer>
  )
}
