import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Breadcrumb,
  Callout,
  PageTitle,
  Section,
  Steps,
} from '../../components/Ui'
import { BUSINESS_DEFAULTS } from '../../lib/mockData'

function SeatCell({
  state,
  selected,
  onClick,
}: {
  state: 'free' | 'sold' | 'hold'
  selected: boolean
  onClick: () => void
}) {
  const disabled = state !== 'free'
  return (
    <button
      type="button"
      className={`seat seat-${state}${selected ? ' seat-selected' : ''}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={
        state === 'free'
          ? selected
            ? 'Deselect seat'
            : 'Select seat'
          : state
      }
      aria-pressed={selected}
    />
  )
}

export default function SeatMapPage() {
  const { eventId } = useParams()
  const grid = Array.from({ length: 48 }, (_, i) =>
    i % 7 === 0 ? 'sold' : i % 11 === 0 ? 'hold' : 'free',
  ) as ('free' | 'sold' | 'hold')[]
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [holdConfirmed, setHoldConfirmed] = useState(false)

  function toggleSeat(i: number) {
    if (grid[i] !== 'free') return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Discover', to: '/' },
          {
            label: 'Sessions',
            to: `/buy/events/${eventId}/sessions`,
          },
          { label: 'Seat map' },
        ]}
      />
      <Steps
        steps={['Performance', 'Seats', 'Cart', 'Checkout', 'Tickets']}
        current={1}
      />
      <PageTitle
        title="Pick your seats"
        lead={`Reserved seating · Stage at top · Inventory = total − sold − active holds − organiser holds − maintenance blocks.`}
      />

      {holdConfirmed ? (
        <Callout>
          Seats held — pay within{' '}
          <strong>{BUSINESS_DEFAULTS.paymentMinutes} minutes</strong> (hold{' '}
          {BUSINESS_DEFAULTS.holdMinutes} min). Timer:{' '}
          <strong>11:42</strong> remaining.
        </Callout>
      ) : (
        <Callout variant="warn">
          Select seats, then confirm to start the hold timer. If two buyers
          select the same seat, first confirmed hold wins; refresh the map if
          you lose a seat.
        </Callout>
      )}

      <Section title="Seat map">
        <p className="muted row">
          <span className="badge badge-ok">Available</span>
          <span className="badge">Sold</span>
          <span className="badge badge-warn">Held by others</span>
        </p>
        <div className="seat-map-wrap">
          <div className="seat-map-stage" aria-hidden="true">
            STAGE
          </div>
          <div className="seat-map" role="grid" aria-label="Seat map">
            {grid.map((s, i) => (
              <SeatCell
                key={i}
                state={s}
                selected={selected.has(i)}
                onClick={() => toggleSeat(i)}
              />
            ))}
          </div>
        </div>
        <p className="muted">
          Adjacent seats enforced per order where possible. If your quantity
          cannot be seated together, checkout is blocked — adjust quantity or
          zone.
        </p>
        {selected.size > 0 && !holdConfirmed ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setHoldConfirmed(true)}
          >
            Confirm selection ({selected.size} seat
            {selected.size === 1 ? '' : 's'})
          </button>
        ) : null}
      </Section>

      <Section title="Accessible seating">
        <p className="muted">
          Wheelchair and companion positions (rows A–C) require eligibility.
          MVP: purchase as standard seats; post-MVP: verification or approval
          workflow.
        </p>
      </Section>

      <p>
        {holdConfirmed ? (
          <Link to="/cart" className="btn btn-primary">
            Continue to cart
          </Link>
        ) : (
          <span className="btn" aria-disabled="true">
            Continue to cart
          </span>
        )}{' '}
        <Link
          to={`/buy/events/${eventId}/sessions`}
          className="btn"
          onClick={() => setHoldConfirmed(false)}
        >
          Back — release hold
        </Link>
      </p>
    </>
  )
}
