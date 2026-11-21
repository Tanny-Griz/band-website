import { Button } from '../../components/Button/Button'
import './HeroSection.css'

export function HeroSection() {
    return (
        <section className="hero" id="home" aria-label="Band introduction">
            <div className="hero__content section-container">
                <h1 className="display-heading">Sounds</h1>
                <p className="section-eyebrow hero__eyebrow">Cinematic Electronica / Darkwave</p>
                <span className="signal-line hero__signal" aria-hidden="true" />
                <p className="hero__description">
                    Music for the space between human and machine — cinematic soundscapes, electronic tension, and dark alternative emotion.
                </p>

                <div className="hero__actions" aria-label="Band actions">
                    <Button href="#latest-release" variant="primary">
                        Listen Now
                    </Button>
                    <Button href="#shows" variant="outline">
                        View Shows
                    </Button>
                </div>
            </div>
        </section>
    )
}
