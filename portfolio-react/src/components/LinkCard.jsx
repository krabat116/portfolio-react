import './LinkCard.css'
import { Link } from 'react-router-dom'

export default function LinkCard({
  title,
  description,
  href,
  symbol,
  download,
  to,
}) {
  if (to) {
    return (
      <Link className="link-card" to={to}>
        <div className="link-card-content">
          <h3>{title}</h3>
        </div>

        <span className="symbol">{symbol}</span>
      </Link>
    )
  }
  return (
    <a
      href={href}
      className="link-card"
      download={download}
      target={download ? undefined : '_self'}
      rel="noreferrer"
    >
      <div className="link-card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <span className="symbol">{symbol}</span>
    </a>
  )
}
