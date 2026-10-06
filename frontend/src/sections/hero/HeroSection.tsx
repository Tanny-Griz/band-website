import { Button } from '../../components/Button/Button'
import { useBand } from '../../hooks/useBand'
import './HeroSection.css'

export function HeroSection() {
    const { band } = useBand()

    return (
        <section className="hero" id="home" aria-label="Band introduction">
            <div className="hero__content section-container">
                <p className="hero__eyebrow">{band?.genre ?? 'Cinematic Electronica'}</p>
                {/*<h1>{band?.bandName ?? 'Syntheir'}</h1>*/}
                <h1>Syntheir</h1>
                <p className="hero__description">
                    {band?.description ??
                        'Raw emotion. Where tension becomes sound.'}
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
