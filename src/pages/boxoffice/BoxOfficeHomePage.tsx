import { Link } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'

export default function BoxOfficeHomePage() {
  return (
    <>
      <PageTitle
        title="Box office"
        lead="Gate verification and venue sales share one inventory system."
      />
      <Section title="Choose a task">
        <div className="grid-2">
          <div className="card">
            <h3>Scan &amp; admit</h3>
            <p className="muted">Validate digital tickets at the door.</p>
            <Link to="/box-office/scan" className="btn btn-primary">
              Open scanner
            </Link>
          </div>
          <div className="card">
            <h3>Walk-up sales</h3>
            <p className="muted">Sell tickets with cash or POS.</p>
            <Link to="/box-office/sales" className="btn btn-primary">
              New sale
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
