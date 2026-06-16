import { Link } from 'react-router-dom'
import { DISTRIK, PERSONAS } from '../data/distrik'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="container hero__inner">
          <span className="badge badge-primary">✨ Gratis · 5 menit · Tanpa akun</span>
          <h1 className="hero__title">
            Temukan Distrik Terbaik di Yogyakarta untuk Kerja Remote-mu
          </h1>
          <p className="hero__subtitle">
            Internet, biaya hidup, komunitas, dan lingkungan — semua data digabung jadi satu
            rekomendasi yang dipersonalisasi sesuai gaya kerjamu.
          </p>
          <div className="hero__cta">
            <Link to="/quiz" className="btn btn-primary">
              Mulai Quiz Sekarang →
            </Link>
            <a href="#how" className="btn btn-secondary">
              Lihat cara kerjanya
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>5</strong>
              <span>Distrik dianalisis</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Indikator kunci</span>
            </div>
            <div>
              <strong>&lt;60s</strong>
              <span>Waktu hasil</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <h2 className="section__title">Bagaimana cara kerjanya?</h2>
          <div className="how-steps">
            <div className="how-step">
              <span className="how-step__num">1</span>
              <h3>Pilih persona & preferensi</h3>
              <p className="text-muted">Developer, Creator, atau Student — sesuaikan budget & prioritasmu.</p>
            </div>
            <div className="how-step">
              <span className="how-step__num">2</span>
              <h3>Lihat cara algoritma bekerja</h3>
              <p className="text-muted">Transparan — kamu bisa lihat bobot tiap indikator sebelum hasil keluar.</p>
            </div>
            <div className="how-step">
              <span className="how-step__num">3</span>
              <h3>Dapatkan ranking personal</h3>
              <p className="text-muted">5 distrik diurutkan sesuai kebutuhanmu, lengkap dengan data pendukung.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title">Untuk siapa platform ini?</h2>
          <div className="persona-grid">
            {PERSONAS.map((p) => (
              <div key={p.key} className="persona-preview-card">
                <span className="persona-preview-card__emoji">{p.emoji}</span>
                <h3>{p.name}</h3>
                <p className="text-muted">{p.blurb}</p>
                <span className="badge badge-primary">{p.budgetRange}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">5 Distrik yang Kami Analisis</h2>
          <div className="distrik-preview-grid">
            {DISTRIK.map((d) => (
              <Link key={d.slug} to={`/distrik/${d.slug}`} className="distrik-preview-card">
                <span className="distrik-preview-card__emoji">{d.emoji}</span>
                <h4>{d.name}</h4>
                <p className="text-muted">{d.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-box">
          <h2>Siap menemukan distrik yang cocok untukmu?</h2>
          <Link to="/quiz" className="btn btn-primary">
            Mulai Quiz Gratis →
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p className="text-faint">
            Freelance City Index · Yogyakarta Edition · Prototype UI/UX 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
