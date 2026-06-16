import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../../state/AdminContext'
import { INDICATORS, IndicatorKey } from '../../data/distrik'
import './Admin.css'

function daysSince(dateStr: string): number {
  const diff = Date.now() - new Date(dateStr).getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function freshnessBadge(days: number) {
  if (days <= 3) return <span className="badge badge-success">✅ {days}h lalu</span>
  if (days <= 7) return <span className="badge badge-warning">⚠️ {days}h lalu</span>
  return <span className="badge badge-danger">🔴 Overdue ({days}h)</span>
}

type Tab = 'data' | 'audit' | 'import'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { isLoggedIn, adminName, logout, distrikData, updateIndicator, auditLog } = useAdmin()
  const [tab, setTab] = useState<Tab>('data')
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [csvPreview, setCsvPreview] = useState<string[][] | null>(null)

  if (!isLoggedIn) {
    navigate('/admin')
    return null
  }

  const editingDistrik = distrikData.find((d) => d.slug === editingSlug)

  function handleCsvUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const text = String(reader.result)
      const rows = text
        .trim()
        .split('\n')
        .map((line) => line.split(','))
      setCsvPreview(rows)
    }
    reader.readAsText(file)
  }

  return (
    <div className="admin-dashboard container">
      <div className="admin-dashboard__header">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="text-muted">Masuk sebagai {adminName}</p>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            logout()
            navigate('/admin')
          }}
        >
          Keluar
        </button>
      </div>

      <div className="admin-tabs">
        <button className={`admin-tab ${tab === 'data' ? 'admin-tab--active' : ''}`} onClick={() => setTab('data')}>
          📊 Data Management
        </button>
        <button className={`admin-tab ${tab === 'audit' ? 'admin-tab--active' : ''}`} onClick={() => setTab('audit')}>
          📜 Audit Log
        </button>
        <button className={`admin-tab ${tab === 'import' ? 'admin-tab--active' : ''}`} onClick={() => setTab('import')}>
          📥 Bulk Import
        </button>
      </div>

      {tab === 'data' && (
        <div className="card admin-panel">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Distrik</th>
                <th>Internet</th>
                <th>Cost</th>
                <th>Community</th>
                <th>Environment</th>
                <th>Update Terakhir</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {distrikData.map((d) => (
                <tr key={d.slug}>
                  <td>
                    {d.emoji} {d.name}
                  </td>
                  <td>{d.internet}</td>
                  <td>{d.cost}</td>
                  <td>{d.community}</td>
                  <td>{d.environment}</td>
                  <td>{freshnessBadge(daysSince(d.updatedAt))}</td>
                  <td>
                    <button className="btn btn-ghost" onClick={() => setEditingSlug(d.slug)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'audit' && (
        <div className="card admin-panel">
          {auditLog.length === 0 ? (
            <p className="text-muted">Belum ada perubahan tercatat.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Admin</th>
                  <th>Distrik</th>
                  <th>Field</th>
                  <th>Perubahan</th>
                </tr>
              </thead>
              <tbody>
                {auditLog.map((entry) => (
                  <tr key={entry.id}>
                    <td className="text-faint">{new Date(entry.timestamp).toLocaleString('id-ID')}</td>
                    <td>{entry.admin}</td>
                    <td>{entry.distrikName}</td>
                    <td>{entry.field}</td>
                    <td>
                      {entry.oldValue} → <strong>{entry.newValue}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button className="btn btn-secondary" style={{ marginTop: 16 }} onClick={() => alert('Export CSV (mock)')}>
            ⬇️ Export Log
          </button>
        </div>
      )}

      {tab === 'import' && (
        <div className="card admin-panel">
          <p className="text-muted">
            Format CSV: <code>distrik_name,internet,cost,community,environment</code>
          </p>
          <input type="file" accept=".csv" onChange={handleCsvUpload} className="csv-input" />
          {csvPreview && (
            <div className="csv-preview">
              <h3>Preview</h3>
              <table className="admin-table">
                <tbody>
                  {csvPreview.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="quiz-nav" style={{ marginTop: 16 }}>
                <button className="btn btn-primary" onClick={() => alert('Import dikonfirmasi (mock)')}>
                  Konfirmasi Import
                </button>
                <button className="btn btn-ghost" onClick={() => setCsvPreview(null)}>
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {editingDistrik && (
        <div className="modal-overlay" onClick={() => setEditingSlug(null)}>
          <div className="card modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>
              Update: {editingDistrik.emoji} {editingDistrik.name}
            </h3>
            {INDICATORS.map((ind) => (
              <div key={ind.key} className="edit-slider-row">
                <label>
                  {ind.emoji} {ind.label}: <strong>{editingDistrik[ind.key as IndicatorKey]}</strong>/100
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={editingDistrik[ind.key as IndicatorKey]}
                  onChange={(e) => updateIndicator(editingDistrik.slug, ind.key as IndicatorKey, Number(e.target.value))}
                  className="budget-slider"
                />
              </div>
            ))}
            <p className="text-faint" style={{ marginTop: 8, fontSize: 12 }}>
              ✓ Perubahan otomatis tersimpan & tercatat di audit log.
            </p>
            <button className="btn btn-primary btn-block" style={{ marginTop: 16 }} onClick={() => setEditingSlug(null)}>
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
