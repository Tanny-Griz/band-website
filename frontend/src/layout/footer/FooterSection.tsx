import { BrandIcon } from '../../components/icons/BrandIcon'
import { socialLinks } from '../../components/icons/socialLinks'
import { useBand } from '../../hooks/useBand'
import './FooterSection.css'

const currentYear = new Date().getFullYear()

export function FooterSection() {
  const { band } = useBand()
  const bandName = band?.bandName ?? 'Band Name'

  return (
    <footer className="site-footer">
      <div className="site-footer__inner section-container">
        <nav className="site-footer__socials" aria-label="Social and music links">
          {socialLinks.map(({ href, icon, label }) => (
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
