interface ProgressIndicatorProps {
  current: number // 1-based
  total: number
  labels?: string[]
}

export default function ProgressIndicator({ current, total, labels }: ProgressIndicatorProps) {
  return (
    <div className="progress-wrap">
      <div className="step-indicator" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
          <span
            key={step}
            className={`step-dot ${step === current ? 'active' : ''} ${step < current ? 'done' : ''}`}
          />
        ))}
      </div>
      <p className="progress-label text-muted">
        Langkah {current} dari {total}
        {labels?.[current - 1] ? ` · ${labels[current - 1]}` : ''}
      </p>
    </div>
  )
}
