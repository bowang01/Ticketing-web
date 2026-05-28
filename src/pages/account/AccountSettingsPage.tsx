import { PageTitle, Section } from '../../components/Ui'

export default function AccountSettingsPage() {
  return (
    <>
      <PageTitle
        title="Account settings"
        lead="Security, sessions, and account closure."
      />
      <Section title="Profile">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="buyer@example.com" />
        </div>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </Section>
      <Section title="Multi-factor authentication">
        <p className="muted">
          Optional MFA via authenticator app. Recommended for staff-linked
          accounts.
        </p>
        <button type="button" className="btn">
          Enable MFA
        </button>
      </Section>
      <Section title="Active sessions">
        <table className="table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Location</th>
              <th>Last active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chrome on Windows</td>
              <td>Wellington, NZ</td>
              <td>Now</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Close account">
        <p className="muted">
          Closing your account does not delete past orders — records are retained
          for tax, fraud, and dispute resolution as described in the privacy
          notice.
        </p>
        <button type="button" className="btn">
          Request account deletion
        </button>
      </Section>
    </>
  )
}
