import { Link } from 'react-router-dom'
import { PageTitle } from '../components/Ui'

export default function NotFoundPage() {
  return (
    <>
      <PageTitle
        title="Page not found"
        lead="The page you requested does not exist or was moved."
      />
      <p>
        <Link to="/" className="btn btn-primary">
          Back to discover
        </Link>
      </p>
    </>
  )
}
