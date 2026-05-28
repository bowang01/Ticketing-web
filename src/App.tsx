import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import DiscoverPage from './pages/guest/DiscoverPage'
import EventDetailPage from './pages/guest/EventDetailPage'
import LegalPage from './pages/guest/LegalPage'
import RefundsPolicyPage from './pages/guest/RefundsPolicyPage'
import SessionSelectPage from './pages/purchase/SessionSelectPage'
import SeatMapPage from './pages/purchase/SeatMapPage'
import ZoneTicketsPage from './pages/purchase/ZoneTicketsPage'
import CartPage from './pages/purchase/CartPage'
import CheckoutPage from './pages/purchase/CheckoutPage'
import OrderConfirmationPage from './pages/purchase/OrderConfirmationPage'
import LoginPage from './pages/account/LoginPage'
import RegisterPage from './pages/account/RegisterPage'
import OrdersPage from './pages/account/OrdersPage'
import OrderDetailPage from './pages/account/OrderDetailPage'
import GuestOrderLookupPage from './pages/account/GuestOrderLookupPage'
import AccountSettingsPage from './pages/account/AccountSettingsPage'
import BoxOfficeHomePage from './pages/boxoffice/BoxOfficeHomePage'
import BoxOfficeScanPage from './pages/boxoffice/BoxOfficeScanPage'
import BoxOfficeSalesPage from './pages/boxoffice/BoxOfficeSalesPage'
import AdminOverviewPage from './pages/admin/AdminOverviewPage'
import AdminEventsPage from './pages/admin/AdminEventsPage'
import AdminEventEditorPage from './pages/admin/AdminEventEditorPage'
import AdminSessionsPage from './pages/admin/AdminSessionsPage'
import AdminSeatTemplatesPage from './pages/admin/AdminSeatTemplatesPage'
import AdminPricingPage from './pages/admin/AdminPricingPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminReportsPage from './pages/admin/AdminReportsPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminCheckInPage from './pages/admin/AdminCheckInPage'
import FinanceReconciliationPage from './pages/finance/FinanceReconciliationPage'
import SupportTicketsPage from './pages/support/SupportTicketsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DiscoverPage />} />
        <Route path="events/:id" element={<EventDetailPage />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="legal/refunds" element={<RefundsPolicyPage />} />
        <Route
          path="buy/events/:eventId/sessions"
          element={<SessionSelectPage />}
        />
        <Route
          path="buy/events/:eventId/sessions/:sessionId/seats"
          element={<SeatMapPage />}
        />
        <Route
          path="buy/events/:eventId/sessions/:sessionId/zones"
          element={<ZoneTicketsPage />}
        />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route
          path="orders/confirm-demo"
          element={<OrderConfirmationPage />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="account/orders" element={<OrdersPage />} />
        <Route path="account/orders/:orderId" element={<OrderDetailPage />} />
        <Route path="lookup" element={<GuestOrderLookupPage />} />
        <Route path="account/settings" element={<AccountSettingsPage />} />
        <Route path="box-office" element={<BoxOfficeHomePage />} />
        <Route path="box-office/scan" element={<BoxOfficeScanPage />} />
        <Route path="box-office/sales" element={<BoxOfficeSalesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverviewPage />} />
        <Route path="events" element={<AdminEventsPage />} />
        <Route path="events/:eventId" element={<AdminEventEditorPage />} />
        <Route path="sessions" element={<AdminSessionsPage />} />
        <Route path="seat-templates" element={<AdminSeatTemplatesPage />} />
        <Route path="pricing" element={<AdminPricingPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="check-in" element={<AdminCheckInPage />} />
        <Route
          path="reconciliation"
          element={<FinanceReconciliationPage />}
        />
        <Route path="support" element={<SupportTicketsPage />} />
      </Route>
    </Routes>
  )
}
