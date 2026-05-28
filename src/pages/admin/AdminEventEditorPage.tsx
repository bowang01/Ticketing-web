import { Link, useParams } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'
import { EVENT_DETAILS } from '../../lib/mockData'

export default function AdminEventEditorPage() {
  const { eventId } = useParams()
  const isNew = eventId === 'new'
  const seed = isNew ? null : EVENT_DETAILS[eventId ?? '']

  return (
    <>
      <PageTitle
        title={isNew ? 'New event' : `Edit: ${seed?.title ?? eventId}`}
        lead="Incomplete drafts cannot be published. Content review optional before go-live."
      />
      <Section title="Basics">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" defaultValue={seed?.title} />
        </div>
        <div className="field">
          <label htmlFor="sub">Subtitle</label>
          <input id="sub" defaultValue={seed?.subtitle} />
        </div>
        <div className="grid-2">
          <div className="field">
            <label htmlFor="duration">Duration</label>
            <input id="duration" defaultValue={seed?.duration} />
          </div>
          <div className="field">
            <label htmlFor="age">Age rating</label>
            <input id="age" defaultValue={seed?.ageRating} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="desc">Description</label>
          <textarea id="desc" rows={4} defaultValue={seed?.description} />
        </div>
      </Section>
      <Section title="Venue & compliance">
        <div className="field">
          <label htmlFor="venue">Venue name</label>
          <input id="venue" defaultValue={seed?.venue.name} />
        </div>
        <div className="field">
          <label htmlFor="access">Accessibility notes</label>
          <textarea id="access" rows={2} defaultValue={seed?.venue.accessibility} />
        </div>
      </Section>
      <Section title="Lifecycle">
        <label className="row">
          <input type="checkbox" /> Submit for compliance review
        </label>
        <label className="row">
          <input type="checkbox" /> Publish to public catalogue
        </label>
        <div className="row" style={{ marginTop: '0.75rem' }}>
          <button type="button" className="btn btn-primary">
            Save draft
          </button>
          <button type="button" className="btn">
            Unpublish
          </button>
          <Link to="/admin/events" className="btn">
            Cancel
          </Link>
        </div>
      </Section>
    </>
  )
}
