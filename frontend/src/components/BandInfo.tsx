import { useBand } from '../hooks/useBand'

export function BandInfo() {
    const { band, loading, error } = useBand()

    if (loading) {
        return <p>Loading band...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!band) {
        return <p>Band not found.</p>
    }

    return (
        <section>
            <h2>{band.bandName}</h2>
            {band.genre && <p>{band.genre}</p>}
            {band.description && <p>{band.description}</p>}
        </section>
    )
}
