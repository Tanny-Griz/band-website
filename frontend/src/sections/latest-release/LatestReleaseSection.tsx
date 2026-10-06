import { Button } from '../../components/Button/Button'
import { BrandIcon } from '../../components/icons/BrandIcon'
import './LatestReleaseSection.css'

export function LatestReleaseSection() {
  return (
    <section className="latest-release" id="latest-release" aria-labelledby="latest-release-title">
      <div className="latest-release__inner section-container">
        <div className="latest-release__artwork-wrap">
          <img
            className="latest-release__artwork"
            src="/images/last_release.png"
            alt="Latest release cover art"
          />
        </div>

        <div className="latest-release__content">
          <p className="latest-release__eyebrow">Latest Release</p>
          <h2 id="latest-release-title">Echoes of the Void</h2>
          <p className="latest-release__date">Out May 10, 2026</p>

          <div className="latest-release__actions" aria-label="Listen to Echoes of the Void">
            <Button href="https://open.spotify.com" icon={<BrandIcon name="spotify" />} variant="media">
              Spotify
            </Button>
            <Button href="https://music.apple.com" icon={<BrandIcon name="appleMusic" />} variant="media">
              Apple Music
            </Button>
            <Button href="https://www.youtube.com" icon={<BrandIcon name="youtube" />} variant="media">
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
