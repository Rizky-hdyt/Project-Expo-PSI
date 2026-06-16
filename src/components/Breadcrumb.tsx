import { Link, useLocation } from 'react-router-dom'
import './Breadcrumb.css'

type BreadcrumbItem = {
  label: string
  href?: string
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Beranda', href: '/' }],
  '/quiz': [
    { label: 'Beranda', href: '/' },
    { label: 'Kuis' },
  ],
  '/quiz/step1': [
    { label: 'Beranda', href: '/' },
    { label: 'Kuis', href: '/quiz' },
    { label: 'Profil' },
  ],
  '/quiz/step2': [
    { label: 'Beranda', href: '/' },
    { label: 'Kuis', href: '/quiz' },
    { label: 'Algoritma' },
  ],
  '/quiz/step3': [
    { label: 'Beranda', href: '/' },
    { label: 'Kuis', href: '/quiz' },
    { label: 'Hasil' },
  ],
  '/admin': [
    { label: 'Beranda', href: '/' },
    { label: 'Admin' },
  ],
  '/admin/dashboard': [
    { label: 'Beranda', href: '/' },
    { label: 'Admin', href: '/admin' },
    { label: 'Dashboard' },
  ],
}

export default function Breadcrumb() {
  const location = useLocation()
  const items = routeMap[location.pathname] || [{ label: location.pathname }]

  if (items.length <= 1) return null

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container breadcrumb__inner">
        {items.map((item, idx) => (
          <div key={idx} className="breadcrumb__item">
            {item.href ? (
              <Link to={item.href} className="breadcrumb__link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb__current">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="breadcrumb__separator">/</span>}
          </div>
        ))}
      </div>
    </nav>
  )
}
