import { Link } from 'react-router-dom'
import { Callout, PageTitle, Section } from '../../components/Ui'

export default function RegisterPage() {
  return (
    <>
      <PageTitle
        title="Create account"
        lead="Consolidate orders, apply purchase limits across devices, and manage notifications."
      />
      <Section title="Details">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input id="pw" type="password" autoComplete="new-password" />
        </div>
        <label className="row muted">
          <input type="checkbox" /> I agree to the{' '}
          <Link to="/legal">terms and privacy notice</Link>
        </label>
        <button type="button" className="btn btn-primary">
          Register
        </button>
      </Section>
      <Callout>
        Guest checkout remains available — you do not need an account to buy
        tickets. Signed-in users get merged limits and order history.
      </Callout>
      <p className="muted">
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </>
  )
}
