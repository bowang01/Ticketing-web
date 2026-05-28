import { Link } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'

export default function LoginPage() {
  return (
    <>
      <PageTitle
        title="Sign in"
        lead="Email or mobile sign-in. MFA available for elevated-risk accounts."
      />
      <Section title="Credentials">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="username" />
        </div>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input id="pw" type="password" autoComplete="current-password" />
        </div>
        <button type="button" className="btn btn-primary">
          Sign in
        </button>
      </Section>
      <Section title="Security (optional)">
        <p className="muted">
          MFA via authenticator app or SMS. New device sign-in may trigger email
          alert. Manage devices under{' '}
          <Link to="/account/settings">Account settings</Link>.
        </p>
      </Section>
      <p className="muted">
        New here? <Link to="/register">Create an account</Link> · Buying as a
        guest? <Link to="/lookup">Find your order</Link>
      </p>
    </>
  )
}
