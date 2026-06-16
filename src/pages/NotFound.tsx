import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p className="text-muted" style={{ marginBottom: 24 }}>Halaman tidak ditemukan.</p>
      <Link to="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  )
}
