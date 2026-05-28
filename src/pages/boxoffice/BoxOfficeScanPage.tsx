import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, PageTitle, Section } from '../../components/Ui'

type ScanOutcome = 'ok' | 'duplicate' | 'invalid' | null

export default function BoxOfficeScanPage() {
  const [outcome, setOutcome] = useState<ScanOutcome>(null)

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Box office', to: '/box-office' },
          { label: 'Scan' },
        ]}
      />
      <PageTitle
        title="Scan tickets"
        lead="Validate QR signature, ticket status, and session time window (admit from X minutes before start — configurable)."
      />
      <Section title="Scanner">
        <div className="field">
          <label htmlFor="scan">Ticket number or QR payload</label>
          <input id="scan" placeholder="TIX-918273 or scan…" />
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOutcome('ok')}
          >
            Verify (demo: valid)
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setOutcome('duplicate')}
          >
            Demo: duplicate
          </button>
        </div>
        {outcome === 'ok' ? (
          <div className="scan-result scan-result-ok" role="status">
            <strong>Admit</strong> — TIX-918273 · Stalls R12 · First scan
          </div>
        ) : null}
        {outcome === 'duplicate' ? (
          <div className="scan-result scan-result-bad" role="alert">
            <strong>Already admitted</strong> — 19:12:04 at Gate A1. Do not
            re-enter.
          </div>
        ) : null}
        {outcome === 'invalid' ? (
          <div className="scan-result scan-result-bad" role="alert">
            <strong>Invalid</strong> — Code E_SESSION_MISMATCH
          </div>
        ) : null}
      </Section>
      <Section title="Supervisor lookup">
        <p className="muted">
          Manual ticket ID lookup requires elevated permission and is audit-logged.
        </p>
        <button type="button" className="btn">
          Lookup by ticket ID
        </button>
      </Section>
      <Section title="Offline mode">
        <p className="muted">
          Optional short offline allow-list with sync on reconnect. Conflicts:
          server wins; supervisor resolves duplicates at gate.
        </p>
      </Section>
      <p>
        <Link to="/box-office" className="btn">
          Back
        </Link>
      </p>
    </>
  )
}
