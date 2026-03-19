import StepHeader from "../Step1Page/components/StepHeader";
import CallTree from "./components/CallTree";
import CodeComparison from "./components/CodeComparison";
import {
  BEFORE_CODE,
  AFTER_CODE,
  BEFORE_CODE_2,
  AFTER_CODE_2,
  BEFORE_CODE_ORDERED,
  AFTER_CODE_ORDERED,
} from "./data";
import "./Step5Page.css";

function Step5Page() {
  return (
    <main className="step5-page">
      <StepHeader step={5} title="함수 호출 트리 및 리팩터링 결과" />

      <section className="step5-page__intro">
        <div className="step5-page__intro-inner">
          <p className="step5-page__intro-label">Step 5</p>
          <h2 className="step5-page__intro-title">
            지금까지 실습한 내용을
            <br />
            정리해볼까요?
          </h2>
          {/* <p className="step5-page__intro-desc">
            함수형 프로그래밍의 세 가지 핵심 리팩터링 패턴을 함께 살펴봅니다.
          </p> */}
          <div className="step5-page__scroll-hint">
            <span>스크롤해서 확인하기</span>
            <svg
              className="step5-page__scroll-arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      <div className="step5-page__content">
        {/*  */}

        {/* <section className="step5-page__section">
          <h2 className="step5-page__section-title">계층화된 함수 호출 트리</h2>
          <p className="step5-page__section-description">
            지금까지 만든 함수를 호출 관계를 바탕으로 다이어그램을 그리면 아래와
            같아요.
          </p>
          <div className="step5-page__tree-wrapper">
            <CallTree />
          </div>
        </section> */}

        <section className="step5-page__section">
          <h2 className="step5-page__section-title">
            1. 액션에서 계산을 분리하는 연습을 했습니다.
          </h2>
          <p className="step5-page__section-description">
            암묵적 입력이란, 함수가 외부에서 어떤 데이터를 참조해서 계산을 하는
            경우를 말해요.
          </p>
          <p className="step5-page__section-description">
            이런 암묵적 입력은 외부에서 다른 요인에 의해 값이 바뀔 수 있기
            때문에, 함수의 결과를 예측하기 어렵게 만들어요.
          </p>
          <p className="step5-page__section-description">
            이를 인자로 명시적으로 전달하는 방식으로 리팩터링을 했습니다. 이렇게
            하면 각 함수가 어떤 데이터를 필요로 하는지 명확해지고, 함수는
            안전해집니다.
          </p>
          <CodeComparison
            beforeCode={BEFORE_CODE_ORDERED}
            afterCode={AFTER_CODE_ORDERED}
          />
        </section>

        <section className="step5-page__section">
          <h2 className="step5-page__section-title">
            2. processOrder 라는 하나의 큰 비즈니스 함수를 작은 행동들로
            나누었습니다.
          </h2>
          <p className="step5-page__section-description">
            Before 코드를 보면 processOrder 함수가 너무 많은 책임을 가지고 있고,
            그 안에서 여러 단계의 추상화 레벨이 섞여 있는 것을 알 수 있어요.
          </p>
          <p className="step5-page__section-description">
            우선 작은 행동 단위로 함수를 나누고, 그 함수들을 호출하는 방식으로
            리팩터링을 했습니다.
          </p>
          <p className="step5-page__section-description">
            추상화 레벨이 일정해져서 코드를 읽어 내려갈 때 '주문 처리'라는 큰
            흐름이 더 명확히 보이지 않나요?
          </p>
          <CodeComparison beforeCode={BEFORE_CODE} afterCode={AFTER_CODE} />
        </section>

        <section className="step5-page__section">
          <h2 className="step5-page__section-title">
            3. 각 주요 기능 함수에서 도메인을 분리했습니다.
          </h2>
          <p className="step5-page__section-description">
            도메인을 분리하면 재사용성을 높일 수 있어요!
          </p>
          <p className="step5-page__section-description">
            이때 JS의 기능은 노출하지 않도록 합니다.
          </p>
          <p className="step5-page__section-description">
            이 덕분에 After 코드를 보면 뺴기의 순서가 잘못됐는지, 혹은
            반복문에서 off-by-one 에러 등을 걱정할 필요가 없어진 것을 알 수
            있어요.
          </p>
          <p className="step5-page__section-description">
            훨씬 높은 수준에서 코드를 읽을 수 있게 되었죠? 게다가 각 함수는
            순수하여 결과를 예측하기도, 테스트하기도 훨씬 쉬워졌습니다. 그만큼
            재사용 하기도, 유지보수하기도 쉬워졌죠.
          </p>
          <CodeComparison
            beforeCode={BEFORE_CODE_2}
            afterCode={AFTER_CODE_2}
            beforeTitle="Before. 리팩터링 전"
            afterTitle="After. 리팩터링 후"
          />
        </section>

        <section className="step5-page__section">
          <h2 className="step5-page__section-title">계층화된 함수 호출 트리</h2>
          <p className="step5-page__section-description">
            지금까지 만든 함수를 호출 관계를 바탕으로 다이어그램을 그리면 아래와
            같아요.
          </p>
          <div className="step5-page__tree-wrapper">
            <CallTree />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Step5Page;
