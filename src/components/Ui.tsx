import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { SaleStatus } from '../lib/mockData'
import { saleStatusBadgeClass, saleStatusLabel } from '../lib/mockData'

export function PageTitle({
  title,
  lead,
}: {
  title: string
  lead?: string
}) {
  return (
    <header className="section">
      <h1 className="page-title">{title}</h1>
      {lead ? <p className="page-lead muted">{lead}</p> : null}
    </header>
  )
}

export function Section({
  title,
  children,
  id,
}: {
  title: string
  children: ReactNode
  id?: string
}) {
  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[]
}) {
  return (
    <nav className="breadcrumb muted" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 ? <span aria-hidden="true"> / </span> : null}
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
        </span>
      ))}
    </nav>
  )
}

export function SaleBadge({ status }: { status: SaleStatus }) {
  return (
    <span className={saleStatusBadgeClass(status)}>{saleStatusLabel(status)}</span>
  )
}

export function Callout({
  children,
  variant = 'info',
}: {
  children: ReactNode
  variant?: 'info' | 'warn' | 'danger'
}) {
  return (
    <div className={`callout callout-${variant}`} role="note">
      {children}
    </div>
  )
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-label muted">{label}</div>
      <div className="stat-card-value">{value}</div>
      {hint ? <div className="stat-card-hint muted">{hint}</div> : null}
    </div>
  )
}

export function Steps({
  steps,
  current,
}: {
  steps: string[]
  current: number
}) {
  return (
    <ol className="checkout-steps" aria-label="Checkout progress">
      {steps.map((label, i) => (
        <li
          key={label}
          className={
            i < current ? 'is-done' : i === current ? 'is-current' : undefined
          }
        >
          <span className="checkout-step-index">{i + 1}</span>
          {label}
        </li>
      ))}
    </ol>
  )
}

export function QrPlaceholder({ ticketId }: { ticketId: string }) {
  return (
    <div className="qr-placeholder" aria-label={`QR code for ${ticketId}`}>
      <div className="qr-pattern" />
      <p className="muted">{ticketId}</p>
    </div>
  )
}

export function DefinitionList({
  items,
}: {
  items: { term: string; detail: ReactNode }[]
}) {
  return (
    <dl className="def-list">
      {items.map(({ term, detail }) => (
        <div key={term} className="def-list-row">
          <dt className="muted">{term}</dt>
          <dd>{detail}</dd>
        </div>
      ))}
    </dl>
  )
}
