import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { INDICATORS, PERSONAS } from '../data/distrik'
import { useQuiz } from '../state/QuizContext'
import ProgressIndicator from '../components/ProgressIndicator'
import './Quiz.css'

export default function QuizStep2() {
  const navigate = useNavigate()
  const { persona } = useQuiz()
  const [experimentMode, setExperimentMode] = useState(false)
  const [customWeights, setCustomWeights] = useState<Record<string, number> | null>(null)

  const selectedPersona = PERSONAS.find((p) => p.key === persona)

  useEffect(() => {
    if (!persona) navigate('/quiz')
  }, [persona, navigate])

  if (!selectedPersona) return null

  const weights = customWeights ?? selectedPersona.weights
  const weightSum = Object.values(weights).reduce((a, b) => a + b, 0)

  function handleWeightChange(key: string, value: number) {
    setCustomWeights({ ...weights, [key]: value / 100 })
  }

  function resetWeights() {
    setCustomWeights(null)
  }

  return (
    <div className="quiz-page container">
      <ProgressIndicator current={2} total={3} labels={['Profil & Preferensi', 'Algoritma', 'Hasil']} />

      <h1 className="quiz-title">Begini cara kami menghitung rekomendasimu</h1>
      <p className="quiz-subtitle text-muted">
        Sebagai <strong>{selectedPersona.name}</strong>, berikut bobot tiap indikator yang kami pakai.
      </p>

      <div className="card algo-card">
        <h3>Bobot Indikator {experimentMode && <span className="badge badge-warning">Mode eksperimen</span>}</h3>
        {INDICATORS.map((ind) => {
          const weight = weights[ind.key]
          return (
            <div className="algo-bar-row" key={ind.key}>
              <span className="algo-bar-row__label">
                {ind.emoji} {ind.label}
              </span>
              {experimentMode ? (
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(weight * 100)}
                  onChange={(e) => handleWeightChange(ind.key, Number(e.target.value))}
                  className="budget-slider"
                  aria-label={`Bobot ${ind.label}`}
                />
              ) : (
                <div className="algo-bar-track">
                  <div className="algo-bar-fill" style={{ width: `${weight * 100}%` }} />
                </div>
              )}
              <span className="algo-bar-row__value">{Math.round(weight * 100)}%</span>
            </div>
          )
        })}

        <div className="algo-experiment-toggle">
          {!experimentMode ? (
            <button type="button" className="btn btn-secondary" onClick={() => setExperimentMode(true)}>
              🧪 Coba ubah bobot sendiri
            </button>
          ) : (
            <div className="quiz-nav">
              <button type="button" className="btn btn-secondary" onClick={resetWeights}>
                ↺ Reset ke default
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setExperimentMode(false)}>
                Tutup mode eksperimen
              </button>
            </div>
          )}
        </div>
        {experimentMode && Math.abs(weightSum - 1) > 0.01 && (
          <p className="text-faint" style={{ marginTop: 8, fontSize: 12 }}>
            ⚠️ Total bobot saat ini {Math.round(weightSum * 100)}% (idealnya 100%) — hasil tetap dihitung proporsional.
          </p>
        )}
      </div>

      <div className="card algo-card">
        <h3>Rumus Perhitungan</h3>
        <div className="algo-formula">
          Skor = Σ (nilai_indikator_ternormalisasi × bobot_persona) × 100
          <br />
          <br />
          norm(x) = (x − min) / (max − min) → rentang 0–1
          <br />
          <br />
          Tiebreaker: UMK terendah → Skor komunitas tertinggi → Alfabetis
        </div>
      </div>

      <div className="quiz-actions">
        <button type="button" className="btn btn-primary btn-block" onClick={() => navigate('/quiz/step3')}>
          Lihat Hasil Rekomendasi →
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/quiz')}>
          ← Ubah preferensi
        </button>
      </div>
    </div>
  )
}
