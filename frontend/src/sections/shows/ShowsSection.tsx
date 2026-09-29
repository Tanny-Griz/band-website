import './ShowsSection.css'

const upcomingShows = [
  {
    month: 'Oct',
    day: '10',
    dateTime: '2026-10-10',
    venue: 'Fine Line',
    location: 'Minneapolis, MN',
  },
  {
    month: 'Oct',
    day: '22',
    dateTime: '2026-10-22',
    venue: 'The Rave',
    location: 'Milwaukee, WI',
  },
  {
    month: 'Nov',
    day: '05',
    dateTime: '2026-11-05',
    venue: 'House of Blues',
    location: 'Chicago, IL',
  },
  {
    month: 'Nov',
    day: '18',
    dateTime: '2026-11-18',
    venue: 'Metro',
    location: 'Detroit, MI',
  },
]

export function ShowsSection() {
  return (
    <section className="shows" id="shows" aria-labelledby="shows-title">
      <div className="shows__inner">
        <h2 id="shows-title">Upcoming Shows</h2>

        <div className="shows__list">
          {upcomingShows.map((show) => (
            <article className="shows__item" key={`${show.month}-${show.day}-${show.venue}`}>
              <time className="shows__date" dateTime={show.dateTime}>
                <span className="shows__month">{show.month}</span>
                <span className="shows__day">{show.day}</span>
              </time>

              <div className="shows__details">
                <h3>{show.venue}</h3>
                <p>{show.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
