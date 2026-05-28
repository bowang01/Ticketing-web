import { PageTitle, Section } from '../../components/Ui'

export default function LegalPage() {
  return (
    <>
      <PageTitle
        title="Terms, privacy & minors"
        lead="Visitor-readable compliance. Replace with counsel-approved text before launch."
      />
      <Section title="Platform terms of sale">
        <p>
          By completing a purchase you agree to these terms, the event
          organiser&apos;s conditions where applicable, and our acceptable-use
          rules. Tickets are licences to attend; resale may be restricted.
        </p>
        <ul className="policy-list muted">
          <li>Prices are quoted in NZD unless stated otherwise.</li>
          <li>We may cancel suspicious orders and refund the original payment method.</li>
          <li>Programme, cast, and start times may change; material changes trigger notification.</li>
        </ul>
      </Section>
      <Section title="Privacy">
        <p>
          We collect contact details to fulfil orders, deliver tickets, send
          service messages, and (if enabled) verify identity for entry. We do not
          sell personal data. Retention follows legal and audit requirements
          after account closure.
        </p>
        <ul className="policy-list muted">
          <li>Purpose: ticketing, payments, fraud prevention, support.</li>
          <li>Processors: payment gateway, email/SMS providers (sub-processors listed in full policy).</li>
          <li>Your rights: access, correction, deletion subject to order retention rules.</li>
        </ul>
      </Section>
      <Section title="Minors & age ratings">
        <p>
          Age classifications (e.g. PG, R16) are shown on event pages. Minors
          must attend with a parent or guardian where required by law or venue
          policy. We do not knowingly market R-rated content to children.
        </p>
      </Section>
      <Section title="GST / tax invoices">
        <p className="muted">
          Whether tax invoices with GST are available depends on your ticketing
          entity. Request from order detail when supported.
        </p>
      </Section>
    </>
  )
}
