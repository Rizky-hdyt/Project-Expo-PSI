import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdmin, DEMO_CREDENTIALS } from '../../state/AdminContext'
import './Admin.css'

export default function AdminLogin() {
  const navigate = useNavigate()
  const { login, isLoggedIn } = useAdmin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isLoggedIn) navigate('/admin/dashboard')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const ok = login(email, password)
    if (ok) {
      navigate('/admin/dashboard')
    } else {
      setError('Email atau password salah. Coba kredensial demo di bawah.')
    }
  }

  function fillDemo() {
    setEmail(DEMO_CREDENTIALS.email)
    setPassword(DEMO_CREDENTIALS.password)
    setError('')
  }

  return (
    <div className="admin-login container">
      <div className="card admin-login__card">
        <h1>Admin Login</h1>
        <p className="text-muted">Masuk untuk mengelola data distrik & audit log.</p>

        <form onSubmit={handleSubmit} className="admin-login__form">
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@freelancecityindex.id"
            />
          </label>
          <label className="form-field">
            <span>Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-block">
            Masuk
          </button>
        </form>

        <div className="admin-login__demo">
          <p className="text-faint">Kredensial demo untuk prototype:</p>
          <code>{DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}</code>
          <button type="button" className="btn btn-ghost" onClick={fillDemo}>
            Isi otomatis
          </button>
        </div>
      </div>
    </div>
  )
}
