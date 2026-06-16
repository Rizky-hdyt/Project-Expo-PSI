import { Link, useParams } from 'react-router-dom'
import { INDICATORS, formatRupiah, getDistrik } from '../data/distrik'
import NotFound from './NotFound'
import './DistrikDetail.css'

export default function DistrikDetail() {
  const { slug } = useParams<{ slug: string }>()
  const distrik = slug ? getDistrik(slug) : undefined

  if (!distrik) return <NotFound />

  const indicatorValues: Record<string, number> = {
    internet: distrik.internet,
    cost: distrik.cost,
    community: distrik.community,
    environment: distrik.environment,
  }

  return (
    <div className="distrik-detail container">
      <Link to="/" className="btn btn-ghost back-link">
        ← Kembali
      </Link>

      <div className="detail-hero card">
        <span className="detail-hero__emoji">{distrik.emoji}</span>
        <h1>{distrik.name}</h1>
        <p className="text-muted">{distrik.tagline}</p>
        <p className="detail-hero__updated text-faint">Data diperbarui: {distrik.updatedAt}</p>
      </div>

      <p className="detail-description">{distrik.description}</p>

      <section className="detail-section">
        <h2>Indikator Kunci</h2>
        <div className="indicator-grid">
          {INDICATORS.map((ind) => (
            <div key={ind.key} className="card indicator-tile">
              <span className="indicator-tile__emoji">{ind.emoji}</span>
              <span className="indicator-tile__label">{ind.label}</span>
              <span className="indicator-tile__value">{indicatorValues[ind.key]}</span>
              <div className="algo-bar-track">
                <div className="algo-bar-fill" style={{ width: `${indicatorValues[ind.key]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Statistik</h2>
        <div className="stat-grid">
          <div className="card stat-item">
            <span className="text-faint">UMK / bulan</span>
            <strong>{formatRupiah(distrik.umk)}</strong>
          </div>
          <div className="card stat-item">
            <span className="text-faint">Kecepatan internet</span>
            <strong>{distrik.internetMbps} Mbps</strong>
          </div>
          <div className="card stat-item">
            <span className="text-faint">Coworking space</span>
            <strong>{distrik.coworkingCount} lokasi</strong>
          </div>
          <div className="card stat-item">
            <span className="text-faint">Coworking mulai dari</span>
            <strong>{formatRupiah(distrik.coworkingPriceFrom)}</strong>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <h2>Highlight</h2>
        <ul className="highlight-list">
          {distrik.highlights.map((h) => (
            <li key={h}>✓ {h}</li>
          ))}
        </ul>
      </section>

      <div className="detail-cta">
        <Link to="/quiz" className="btn btn-primary">
          Bandingkan dengan distrik lain →
        </Link>
      </div>
    </div>
  )
}
