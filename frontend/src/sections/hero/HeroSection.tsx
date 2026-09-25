import { useBand } from '../../hooks/useBand'
import './HeroSection.css'

export function HeroSection() {
    const { band } = useBand()

    return (
        <section className="hero" id="home" aria-label="Band introduction">
            <img
                className="hero__image"
                src="/images/hero.png"
                alt="Cinematic Electronica Hero"
                aria-hidden="true"
            />
            <div className="hero__content">
                <p className="hero__eyebrow">{band?.genre ?? 'Cinematic Electronica'}</p>
                <h1>{band?.bandName ?? 'Band Website'}</h1>
                <p className="hero__description">
                    {band?.description ??
                        'Raw emotion. Where tension becomes sound.'}
                </p>
            </div>
        </section>
    )
}
