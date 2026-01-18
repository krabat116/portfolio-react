import './LinkCard.css'

export default function LinkCard({ title, description, href, symbol }) {
  return (
    <a href={href} className="link-card">
      <div className="link-card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <span className="symbol">{symbol}</span>
    </a>
  )
}
