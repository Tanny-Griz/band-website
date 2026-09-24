import { useVenues } from '../hooks/useVenues'

export function VenueInfo() {
    const { venues, loading, error } = useVenues()

    if (loading) {
        return <p>Loading venues...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (venues.length === 0) {
        return <p>No venues found.</p>
    }

    return (
        <section>
            <h2>Venues</h2>

            {venues.map((venue) => (
                <div key={venue.venueId}>
                    <h3>{venue.venueName}</h3>
                    <p>
                        {venue.city}
                        {venue.state && `, ${venue.state}`}, {venue.country}
                    </p>
                </div>
            ))}
        </section>
    )
}
