import type { QuizState } from '../../types'
import './QuizOption.css'

interface QuizOptionProps {
  label: string
  selected: boolean
  state: QuizState
  disabled: boolean
  onSelect: () => void
}

function QuizOption({ label, selected, state, disabled, onSelect }: QuizOptionProps) {
  const isCorrect = selected && state === 'correct'
  const isIncorrect = selected && state === 'incorrect'

  const containerClass = [
    'quiz-option',
    isCorrect ? 'quiz-option--correct' : '',
    isIncorrect ? 'quiz-option--incorrect' : '',
    disabled ? 'quiz-option--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const radioClass = [
    'quiz-option__radio',
    isCorrect ? 'quiz-option__radio--correct' : '',
    isIncorrect ? 'quiz-option__radio--incorrect' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={containerClass} onClick={onSelect} disabled={disabled}>
      <span className={radioClass}>
        {(isCorrect || isIncorrect) && <span className="quiz-option__radio-inner" />}
      </span>
      <span className="quiz-option__text">{label}</span>
    </button>
  )
}

export default QuizOption
