import { useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PERSONAS, formatRupiah } from '../data/distrik'
import { rankDistrik, fitsBudget } from '../lib/scoring'
import { useQuiz } from '../state/QuizContext'
import ProgressIndicator from '../components/ProgressIndicator'
import './Quiz.css'

export default function QuizStep3() {
  const navigate = useNavigate()
  const { persona, budget, reset } = useQuiz()
  const selectedPersona = PERSONAS.find((p) => p.key === persona)

  useEffect(() => {
    if (!persona) navigate('/quiz')
  }, [persona, navigate])

  const ranked = useMemo(() => (selectedPersona ? rankDistrik(selectedPersona) : []), [selectedPersona])

  if (!selectedPersona) return null

  function handleTryAgain() {
    reset()
    navigate('/quiz')
  }

  return (
    <div className="quiz-page container">
      <ProgressIndicator current={3} total={3} labels={['Profil & Preferensi', 'Algoritma', 'Hasil']} />

      <div className="results-header">
        <h1>
          Rekomendasi untuk {selectedPersona.emoji} {selectedPersona.name}
        </h1>
        <p className="text-muted">Diurutkan berdasarkan skor tertimbang dari 4 indikator kunci</p>
      </div>

      {ranked.map((item, idx) => {
        const rank = idx + 1
        const budgetOk = fitsBudget(item.distrik, budget)
        return (
          <div key={item.distrik.slug} className={`card result-card ${rank === 1 ? 'result-card--rank1' : ''}`}>
            <span className="result-rank">#{rank}</span>
            <span className="result-emoji">{item.distrik.emoji}</span>
            <div className="result-info">
              <h3>
                {item.distrik.name}
                {rank === 1 && <span className="badge badge-primary">🏆 Best Match</span>}
                {budgetOk ? (
                  <span className="badge badge-success">Sesuai budget</span>
                ) : (
                  <span className="badge badge-warning">Di atas budget</span>
                )}
              </h3>
              <p className="text-muted">
                {item.distrik.tagline} · UMK {formatRupiah(item.distrik.umk)} · {item.distrik.internetMbps} Mbps
              </p>
            </div>
            <div className="result-score">
              <strong>{item.score}</strong>
              <span>/ 100 poin</span>
            </div>
          </div>
        )
      })}

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link to={`/distrik/${ranked[0]?.distrik.slug}`} className="btn btn-secondary">
          Lihat detail {ranked[0]?.distrik.name} →
        </Link>
      </div>

      <div className="results-actions">
        <button type="button" className="btn btn-ghost" onClick={handleTryAgain}>
          ↺ Coba Lagi
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/quiz/step2')}>
          ← Lihat algoritma lagi
        </button>
      </div>
    </div>
  )
}
