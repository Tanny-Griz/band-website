import { useTours } from '../hooks/useTours'

export function TourInfo() {
    const { tours, loading, error } = useTours()

    if (loading) {
        return <p>Loading tours...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (tours.length === 0) {
        return <p>No tours found.</p>
    }

    return (
        <section>
            <h2>Tours</h2>

            {tours.map((tour) => (
                <div key={tour.tourId}>
                    <h3>{tour.tourName}</h3>
                    <p>Start: {tour.startDate}</p>
                    <p>End: {tour.endDate}</p>
                    <p>Band: {tour.band.bandName}</p>
                </div>
            ))}
        </section>
    )
}