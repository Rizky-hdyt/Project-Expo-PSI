import React, { createContext, useContext, useMemo, useState } from 'react'
import { BUDGET_MIN, PersonaKey } from '../data/distrik'

export type InternetPriority = 'low' | 'medium' | 'high'
export type EnvironmentPriority = 'quiet' | 'cafe' | 'coworking' | 'flexible'

interface QuizState {
  persona: PersonaKey | null
  budget: number
  internetPriority: InternetPriority
  environmentPriority: EnvironmentPriority
  setPersona: (p: PersonaKey) => void
  setBudget: (v: number) => void
  setInternetPriority: (v: InternetPriority) => void
  setEnvironmentPriority: (v: EnvironmentPriority) => void
  reset: () => void
  isStep1Complete: boolean
}

const QuizContext = createContext<QuizState | undefined>(undefined)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersona] = useState<PersonaKey | null>(null)
  const [budget, setBudget] = useState<number>(BUDGET_MIN + 1_000_000)
  const [internetPriority, setInternetPriority] = useState<InternetPriority>('medium')
  const [environmentPriority, setEnvironmentPriority] = useState<EnvironmentPriority>('flexible')

  function reset() {
    setPersona(null)
    setBudget(BUDGET_MIN + 1_000_000)
    setInternetPriority('medium')
    setEnvironmentPriority('flexible')
  }

  const isStep1Complete = persona !== null

  const value = useMemo(
    () => ({
      persona,
      budget,
      internetPriority,
      environmentPriority,
      setPersona,
      setBudget,
      setInternetPriority,
      setEnvironmentPriority,
      reset,
      isStep1Complete,
    }),
    [persona, budget, internetPriority, environmentPriority, isStep1Complete],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz(): QuizState {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error('useQuiz must be used within QuizProvider')
  return ctx
}
