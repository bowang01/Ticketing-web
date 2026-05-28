import { useRef } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle, SaleBadge, Section } from '../../components/Ui'
import { DEFAULT_CITY, EVENTS } from '../../lib/mockData'

export default function DiscoverPage() {
  const keywordRef = useRef<HTMLInputElement>(null)

  function onHeroSearch(e: FormEvent) {
    e.preventDefault()
    document
      .getElementById('discover-filters')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    keywordRef.current?.focus()
  }

  return (
    <>
      <div className="discover-hero" aria-label="Featured">
        <div className="discover-hero-media" aria-hidden="true">
          <img
            src="/images/hero-live.jpg"
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
          />
        </div>
        <div className="discover-hero-gradient" aria-hidden="true" />
        <div className="discover-hero-content">
          <h1>Live shows in {DEFAULT_CITY}</h1>
          <p>
            Browse publicly listed events across music, comedy, and theatre. All
            times Pacific/Auckland; prices in NZD (two decimal places).
          </p>
          <form className="discover-hero-search" onSubmit={onHeroSearch}>
            <input
              name="q"
              placeholder="Event, venue, artist, or tag…"
              aria-label="Search events"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>

      <PageTitle
        title="Discover events"
        lead="Only events marked for public display appear here. Draft and unpublished listings are hidden."
      />

      <div id="discover-filters" className="filters-panel">
        <div className="row" style={{ marginBottom: '0.75rem' }}>
          <span className="badge badge-ok">{DEFAULT_CITY}</span>
          <label className="muted">
            Date range (from today):{' '}
            <select defaultValue="14" aria-label="Days ahead">
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </select>
          </label>
          <label className="muted">
            Single day:{' '}
            <input type="date" aria-label="Filter by single day" />
          </label>
          <label className="muted">
            Sort:{' '}
            <select defaultValue="soon" aria-label="Sort order">
              <option value="soon">On sale soon</option>
              <option value="popular">Most popular</option>
              <option value="price">Price: low to high</option>
              <option value="time">Soonest performance</option>
            </select>
          </label>
        </div>
        <div className="field" style={{ marginBottom: 0, maxWidth: '36rem' }}>
          <label htmlFor="discover-keyword">Keyword</label>
          <input
            ref={keywordRef}
            id="discover-keyword"
            placeholder="e.g. jazz, Opera House, family, orchestra…"
          />
          <span className="muted" style={{ fontSize: '0.8rem' }}>
            Matches title, venue, artist/company, and tags.
          </span>
        </div>
      </div>

      <Section title="Upcoming in Wellington">
        <div className="grid-2">
          {EVENTS.map((ev) => (
            <article key={ev.id} className="event-card">
              <div className="event-card-media">
                <img src={ev.image} alt="" width={900} height={600} />
              </div>
              <div className="event-card-body">
                <h3>{ev.title}</h3>
                <p className="muted">
                  {ev.venue} · {ev.startsAt}
                </p>
                {ev.artist ? (
                  <p className="muted" style={{ margin: 0, fontSize: '0.85rem' }}>
                    {ev.artist}
                  </p>
                ) : null}
                <div className="row">
                  <span className="badge">{ev.tag}</span>
                  <SaleBadge status={ev.status} />
                  {ev.priceFrom != null ? (
                    <span className="muted">From NZD {ev.priceFrom.toFixed(2)}</span>
                  ) : null}
                </div>
                {ev.statusNote ? (
                  <p className="muted" style={{ margin: 0 }}>
                    {ev.statusNote}
                    {ev.status === 'postponed' || ev.status === 'cancelled' ? (
                      <>
                        {' '}
                        <Link to="/lookup">Guest order lookup</Link> ·{' '}
                        <Link to="/admin/support">Contact support</Link>
                      </>
                    ) : null}
                  </p>
                ) : null}
                <div className="event-card-actions">
                  <Link to={`/events/${ev.id}`} className="btn btn-primary">
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
