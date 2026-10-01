import { useState } from 'react'
import { useShows } from '../../hooks/useShows'
import type { Show } from '../../types/show'
import './ShowsSection.css'

const visibleShowCount = 4

function formatShowMonth(showDateTime: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short' })
    .format(new Date(showDateTime))
    .toUpperCase()
}

function formatShowDay(showDateTime: string) {
  return new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(new Date(showDateTime))
}

function formatVenueLocation(show: Show) {
  return [show.venue.city, show.venue.state || show.venue.country].filter(Boolean).join(', ')
}

function sortShowsByDate(shows: Show[]) {
  return [...shows].sort(
    (firstShow, secondShow) =>
      new Date(firstShow.showDateTime).getTime() - new Date(secondShow.showDateTime).getTime(),
  )
}

export function ShowsSection() {
  const [showAllShows, setShowAllShows] = useState(false)
  const { shows, loading, error } = useShows()
  const sortedShows = sortShowsByDate(shows)
  const visibleShows = showAllShows ? sortedShows : sortedShows.slice(0, visibleShowCount)
  const hasMoreShows = sortedShows.length > visibleShowCount

  function handleToggleShows() {
    setShowAllShows((currentValue) => !currentValue)
  }

  return (
    <section className="shows" id="shows" aria-labelledby="shows-title">
      <div className="shows__inner">
        <h2 id="shows-title">Upcoming Shows</h2>

        {loading && <p className="shows__state">Loading shows...</p>}

        {error && <p className="shows__state">{error}</p>}

        {!loading && !error && visibleShows.length === 0 && (
          <p className="shows__state">No upcoming shows found.</p>
        )}

        <div className="shows__list">
          {visibleShows.map((show) => (
            <article className="shows__item" key={show.showId}>
              <time className="shows__date" dateTime={show.showDateTime}>
                <span className="shows__month">{formatShowMonth(show.showDateTime)}</span>
                <span className="shows__day">{formatShowDay(show.showDateTime)}</span>
              </time>

              <div className="shows__details">
                <h3>{show.venue.venueName}</h3>
                <p>{formatVenueLocation(show)}</p>
              </div>
            </article>
          ))}
        </div>

        {!loading && !error && hasMoreShows && (
          <button
            className="shows__toggle"
            type="button"
            aria-expanded={showAllShows}
            onClick={handleToggleShows}
          >
            <span>{showAllShows ? 'Show Less' : 'Show More'}</span>
            <span className="shows__toggle-icon" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}
