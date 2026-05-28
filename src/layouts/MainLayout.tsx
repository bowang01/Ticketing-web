import { NavLink, Outlet } from 'react-router-dom'
import '../styles/app-shell.css'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'app-nav-link is-active' : 'app-nav-link'
}

export default function MainLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <NavLink to="/" className="app-brand" end>
            <img
              src="/logo-mark.svg"
              width={32}
              height={32}
              alt=""
              className="app-brand-mark"
            />
            <span className="app-brand-text">City Tickets</span>
          </NavLink>
          <nav className="app-nav" aria-label="Primary">
            <NavLink to="/" className={navLinkClass} end>
              Discover
            </NavLink>
            <NavLink to="/account/orders" className={navLinkClass}>
              My orders
            </NavLink>
            <NavLink to="/lookup" className={navLinkClass}>
              Guest lookup
            </NavLink>
            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
            <NavLink to="/login" className={navLinkClass}>
              Sign in
            </NavLink>
            <NavLink to="/account/settings" className={navLinkClass}>
              Settings
            </NavLink>
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
            <NavLink to="/box-office" className={navLinkClass}>
              Box office
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <div className="app-footer-inner">
          <div>
            <NavLink to="/legal">Terms &amp; privacy</NavLink>{' '}
            <NavLink to="/legal/refunds">Refunds</NavLink>
            <span className="muted footer-meta">
              Times in Pacific/Auckland · Prices in NZD
            </span>
          </div>
          <div className="muted">
            Purchasing confirms acceptance of platform terms.
          </div>
        </div>
      </footer>
    </div>
  )
}
