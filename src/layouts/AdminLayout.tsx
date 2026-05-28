import { NavLink, Outlet } from 'react-router-dom'
import '../styles/app-shell.css'

function adminNavClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'admin-nav-link is-active' : 'admin-nav-link'
}

const links: { to: string; label: string }[] = [
  { to: '/admin', label: 'Overview' },
  { to: '/admin/events', label: 'Events' },
  { to: '/admin/sessions', label: 'Sessions' },
  { to: '/admin/seat-templates', label: 'Seat templates' },
  { to: '/admin/pricing', label: 'Pricing & fees' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/reports', label: 'Reports' },
  { to: '/admin/users', label: 'Users & roles' },
  { to: '/admin/check-in', label: 'Check-in monitor' },
  { to: '/admin/reconciliation', label: 'Reconciliation' },
  { to: '/admin/support', label: 'Support' },
]

export default function AdminLayout() {
  return (
    <div className="app admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/logo-mark.svg" width={28} height={28} alt="" />
          <div>
            <div className="admin-sidebar-title">Operations</div>
            <NavLink to="/" className="admin-sidebar-public">
              ← Public site
            </NavLink>
          </div>
        </div>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={adminNavClass}
            end={l.to === '/admin'}
          >
            {l.label}
          </NavLink>
        ))}
      </aside>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  )
}
