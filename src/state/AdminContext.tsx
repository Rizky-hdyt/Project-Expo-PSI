import React, { createContext, useContext, useMemo, useState } from 'react'
import { DISTRIK, IndicatorKey, type Distrik } from '../data/distrik'

export interface AuditEntry {
  id: string
  timestamp: string
  admin: string
  distrikName: string
  field: IndicatorKey
  oldValue: number
  newValue: number
}

interface AdminState {
  isLoggedIn: boolean
  adminName: string
  login: (email: string, password: string) => boolean
  logout: () => void
  distrikData: Distrik[]
  updateIndicator: (slug: string, field: IndicatorKey, value: number) => void
  auditLog: AuditEntry[]
}

const AdminContext = createContext<AdminState | undefined>(undefined)

const DEMO_CREDENTIALS = { email: 'admin@freelancecityindex.id', password: 'demo1234' }

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [adminName, setAdminName] = useState('')
  const [distrikData, setDistrikData] = useState<Distrik[]>(() => DISTRIK.map((d) => ({ ...d })))
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([
    {
      id: 'seed-1',
      timestamp: '2026-06-15T14:30:00',
      admin: 'Rizky',
      distrikName: 'Sleman',
      field: 'internet',
      oldValue: 70,
      newValue: 78,
    },
    {
      id: 'seed-2',
      timestamp: '2026-06-14T09:15:00',
      admin: 'Syfa',
      distrikName: 'Kota Yogyakarta',
      field: 'community',
      oldValue: 84,
      newValue: 88,
    },
  ])

  function login(email: string, password: string): boolean {
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setIsLoggedIn(true)
      setAdminName('Rizky')
      return true
    }
    return false
  }

  function logout() {
    setIsLoggedIn(false)
    setAdminName('')
  }

  function updateIndicator(slug: string, field: IndicatorKey, value: number) {
    setDistrikData((prev) =>
      prev.map((d) => {
        if (d.slug !== slug) return d
        const oldValue = d[field]
        if (oldValue === value) return d
        setAuditLog((log) => [
          {
            id: `${Date.now()}`,
            timestamp: new Date().toISOString(),
            admin: adminName || 'Admin',
            distrikName: d.name,
            field,
            oldValue,
            newValue: value,
          },
          ...log,
        ])
        return { ...d, [field]: value, updatedAt: new Date().toISOString().slice(0, 10) }
      }),
    )
  }

  const value = useMemo(
    () => ({ isLoggedIn, adminName, login, logout, distrikData, updateIndicator, auditLog }),
    [isLoggedIn, adminName, distrikData, auditLog],
  )

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdmin(): AdminState {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}

export { DEMO_CREDENTIALS }
