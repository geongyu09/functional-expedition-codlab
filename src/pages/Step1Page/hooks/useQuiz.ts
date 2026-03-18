import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { QuizState } from '../types'
import { CORRECT_OPTION_ID } from '../data'

interface UseQuizResult {
  selectedId: string | null
  quizState: QuizState
  handleSelect: (id: string) => void
  handleNext: () => void
}

function useQuiz(): UseQuizResult {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [quizState, setQuizState] = useState<QuizState>('idle')
  const navigate = useNavigate()

  function handleSelect(id: string) {
    if (quizState === 'correct') return

    setSelectedId(id)
    if (id === CORRECT_OPTION_ID) {
      setQuizState('correct')
    } else {
      setQuizState('incorrect')
    }
  }

  function handleNext() {
    navigate('/step2')
  }

  return { selectedId, quizState, handleSelect, handleNext }
}

export default useQuiz
