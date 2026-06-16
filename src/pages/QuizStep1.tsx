import { useNavigate } from 'react-router-dom'
import { BUDGET_MAX, BUDGET_MIN, formatRupiah, PERSONAS, PersonaKey } from '../data/distrik'
import { useQuiz } from '../state/QuizContext'
import ProgressIndicator from '../components/ProgressIndicator'
import './Quiz.css'

export default function QuizStep1() {
  const navigate = useNavigate()
  const {
    persona,
    setPersona,
    budget,
    setBudget,
    internetPriority,
    setInternetPriority,
    environmentPriority,
    setEnvironmentPriority,
    isStep1Complete,
  } = useQuiz()

  function handleNext() {
    if (isStep1Complete) navigate('/quiz/step2')
  }

  return (
    <div className="quiz-page container">
      <ProgressIndicator current={1} total={3} labels={['Profil & Preferensi', 'Algoritma', 'Hasil']} />

      <h1 className="quiz-title">Ceritakan tentang gaya kerjamu</h1>
      <p className="quiz-subtitle text-muted">Pilihan ini akan menentukan bobot rekomendasi distrik untukmu.</p>

      <section className="quiz-section">
        <h2 className="quiz-section__label">1. Kamu paling cocok sebagai…</h2>
        <div className="persona-selector">
          {PERSONAS.map((p) => (
            <button
              key={p.key}
              type="button"
              className={`persona-card ${persona === p.key ? 'persona-card--selected' : ''}`}
              data-persona={p.key}
              onClick={() => setPersona(p.key as PersonaKey)}
              aria-pressed={persona === p.key}
            >
              <span className="persona-card__emoji">{p.emoji}</span>
              <span className="persona-card__name">{p.name}</span>
              <span className="persona-card__blurb">{p.blurb}</span>
              <span className="badge badge-primary">{p.budgetRange}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="quiz-section">
        <h2 className="quiz-section__label">2. Budget bulanan kamu</h2>
        <div className="budget-slider-wrap card">
          <div className="budget-display">{formatRupiah(budget)}</div>
          <input
            type="range"
            min={BUDGET_MIN}
            max={BUDGET_MAX}
            step={100_000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="budget-slider"
            aria-label="Budget bulanan"
          />
          <div className="budget-range-labels text-faint">
            <span>{formatRupiah(BUDGET_MIN)}</span>
            <span>{formatRupiah(BUDGET_MAX)}</span>
          </div>
        </div>
      </section>

      <section className="quiz-section">
        <h2 className="quiz-section__label">3. Prioritas internet</h2>
        <div className="pill-group" role="radiogroup" aria-label="Prioritas internet">
          {(['low', 'medium', 'high'] as const).map((level) => (
            <button
              key={level}
              type="button"
              role="radio"
              aria-checked={internetPriority === level}
              className={`pill ${internetPriority === level ? 'pill--active' : ''}`}
              onClick={() => setInternetPriority(level)}
            >
              {level === 'low' ? 'Rendah' : level === 'medium' ? 'Sedang' : 'Tinggi'}
            </button>
          ))}
        </div>
      </section>

      <section className="quiz-section">
        <h2 className="quiz-section__label">4. Lingkungan kerja favorit</h2>
        <div className="pill-group" role="radiogroup" aria-label="Lingkungan kerja favorit">
          {(
            [
              ['quiet', 'Tenang'],
              ['cafe', 'Café'],
              ['coworking', 'Coworking'],
              ['flexible', 'Fleksibel'],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={environmentPriority === key}
              className={`pill ${environmentPriority === key ? 'pill--active' : ''}`}
              onClick={() => setEnvironmentPriority(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <div className="quiz-actions">
        <button type="button" className="btn btn-primary btn-block" disabled={!isStep1Complete} onClick={handleNext}>
          Lanjut: Lihat Algoritma →
        </button>
        {!isStep1Complete && <p className="quiz-hint text-faint">Pilih salah satu persona untuk melanjutkan.</p>}
      </div>
    </div>
  )
}
