import { useNavigate } from 'react-router-dom'
import StepHeader from './components/StepHeader'
import CodePanel from '../../components/CodePanel'
import { QUIZ_QUESTION, CODE_FILENAME, CODE_SOURCE, CODE_HIGHLIGHTS } from './data'
import './Step1Page.css'

function Step1Page() {
  const navigate = useNavigate()

  return (
    <main className="step1-page">
      <StepHeader step={1} title="액션에서 계산 추출하기" />
      <div className="step1-page__body">
        <div className="step1-page__quiz-panel">
          <p className="step1-page__question-number">Q1</p>
          <p className="step1-page__question-text">{QUIZ_QUESTION}</p>
          <button 
            className="step1-page__next-btn" 
            onClick={() => navigate('/step2')}
          >
            다음 문제로 이동 →
          </button>
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
