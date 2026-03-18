import { CircleCheckIcon, LightbulbIcon } from '../icons'
import {
  EXPLANATION_INTRO,
  EXPLANATION_ITEMS,
  EXPLANATION_SUMMARY,
} from '../../data'
import './AnswerExplanation.css'

interface AnswerExplanationProps {
  onNext: () => void
  correctAnswer: string
}

function AnswerExplanation({ onNext, correctAnswer }: AnswerExplanationProps) {
  return (
    <div className="answer-explanation">
      <div className="answer-explanation__header">
        <CircleCheckIcon color="#238636" />
        <span className="answer-explanation__header-title">정답입니다!</span>
        <span className="answer-explanation__badge">정답: {correctAnswer}</span>
      </div>
      <p className="answer-explanation__intro">{EXPLANATION_INTRO}</p>
      <div className="answer-explanation__items">
        {EXPLANATION_ITEMS.map((item, index) => (
          <div key={index} className="answer-explanation__item">
            <span className="answer-explanation__item-emoji">{item.emoji}</span>
            <span className="answer-explanation__item-text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="answer-explanation__summary">
        <LightbulbIcon color="#8B949E" />
        <span className="answer-explanation__summary-text">{EXPLANATION_SUMMARY}</span>
      </div>
      <button className="answer-explanation__next-btn" onClick={onNext}>
        다음 문제로 →
      </button>
    </div>
  )
}

export default AnswerExplanation
