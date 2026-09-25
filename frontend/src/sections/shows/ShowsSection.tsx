import { useShows } from '../../hooks/useShows'

export function ShowsSection() {
    const { shows, loading, error } = useShows()

    if (loading) {
        return <p>Loading shows...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (shows.length === 0) {
        return <p>No shows found.</p>
    }

    return (
        <section id="shows">
            <h2>Shows</h2>

            {shows.map((show) => (
                <div key={show.showId}>
                    <h3>{show.tour.tourName}</h3>
                    <p>Date: {show.showDateTime}</p>
                    <p>Venue: {show.venue.venueName}</p>
                    <p>
                        {show.venue.city}
                        {show.venue.state && `, ${show.venue.state}`}, {show.venue.country}
                    </p>
                </div>
            ))}
        </section>
    )
}
