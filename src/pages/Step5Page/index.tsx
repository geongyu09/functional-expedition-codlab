import StepHeader from '../Step1Page/components/StepHeader'
import CallTree from './components/CallTree'
import CodeComparison from './components/CodeComparison'
import './Step5Page.css'

function Step5Page() {
  return (
    <main className="step5-page">
      <StepHeader step={5} title="함수 호출 트리 및 리팩터링 결과" />
      
      <div className="step5-page__content">
        <section className="step5-page__section">
          <h2 className="step5-page__section-title">계층화된 함수 호출 트리</h2>
          <p className="step5-page__section-description">
            지금까지 만든 함수를 호출 관계를 바탕으로 다이어그램을 그리면 아래와 같아요.
          </p>
          <div className="step5-page__tree-wrapper">
            <CallTree />
          </div>
        </section>

        <section className="step5-page__section">
          <h2 className="step5-page__section-title">
            1. processOrder 라는 하나의 큰 비즈니스 함수를 작은 행동들로 나누었습니다.
          </h2>
          <CodeComparison />
        </section>
      </div>
    </main>
  )
}

export default Step5Page
