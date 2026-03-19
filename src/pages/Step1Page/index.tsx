import StepHeader from './components/StepHeader'
import QuizOption from './components/QuizOption'
import HintToggle from './components/HintToggle'
import AnswerExplanation from './components/AnswerExplanation'
import CodePanel from '../../components/CodePanel'
import useQuiz from './hooks/useQuiz'
import { QUIZ_QUESTION, QUIZ_OPTIONS, CORRECT_OPTION_ID, CODE_FILENAME, CODE_SOURCE, CODE_HIGHLIGHTS } from './data'
import './Step1Page.css'

function Step1Page() {
  const { selectedId, quizState, handleSelect, handleNext } = useQuiz()
  const correctOption = QUIZ_OPTIONS.find((o) => o.id === CORRECT_OPTION_ID)

  return (
    <main className="step1-page">
      <StepHeader step={1} title="액션에서 계산 추출하기" />
      <div className="step1-page__body">
        <div className="step1-page__quiz-panel">
          <p className="step1-page__question-number">Q1</p>
          <p className="step1-page__question-text">{QUIZ_QUESTION}</p>
          <div className="step1-page__options">
            {QUIZ_OPTIONS.map((option) => (
              <QuizOption
                key={option.id}
                label={option.text}
                selected={selectedId === option.id}
                state={quizState}
                disabled={quizState === 'correct'}
                onSelect={() => handleSelect(option.id)}
              />
            ))}
          </div>
          <HintToggle />
          {quizState === 'correct' && (
            <AnswerExplanation
              onNext={handleNext}
              correctAnswer={correctOption?.text ?? ''}
            />
          )}
        </div>
        <div className="step1-page__divider" />
        <div className="step1-page__code-panel">
          <CodePanel filename={CODE_FILENAME} code={CODE_SOURCE} language="javascript" highlights={CODE_HIGHLIGHTS} />
        </div>
      </div>
    </main>
  )
}

export default Step1Page
