import { useNavigate } from "react-router-dom";
import { Highlight, themes } from "prism-react-renderer";
import StepHeader from "../Step1Page/components/StepHeader";
import useStep4 from "./hooks/useStep4";
import {
  CALCULATE_TOTAL_PRICE_CODE,
  CALCULATE_TOTAL_KCAL_CODE,
  PROCESS_ORDER_CODE,
} from "./data";
import type { QuizState, QuizChoice } from "./types";
import "./Step4Page.css";

interface QuizSectionProps {
  questionNumber: string;
  questionText: string;
  choices: { value: QuizChoice; label: string }[];
  selected: QuizChoice | null;
  state: QuizState;
  onSelect: (choice: QuizChoice) => void;
  correctFeedback: string;
  incorrectFeedback: string;
}

function QuizSection({
  questionNumber,
  questionText,
  choices,
  selected,
  state,
  onSelect,
  correctFeedback,
  incorrectFeedback,
}: QuizSectionProps) {
  const buttonClass = (choice: QuizChoice): string => {
    const base = "step4-page__choice-button";
    if (selected !== choice) return base;
    if (state === "correct") return `${base} ${base}--selected-correct`;
    if (state === "incorrect") return `${base} ${base}--selected-incorrect`;
    return base;
  };

  return (
    <div className="step4-page__question-block">
      <p className="step4-page__question-number">{questionNumber}</p>
      <p className="step4-page__question-text">{questionText}</p>
      <div className="step4-page__choices">
        {choices.map(({ value, label }) => (
          <button
            key={value}
            className={buttonClass(value)}
            onClick={() => onSelect(value)}
            disabled={state === "correct"}
          >
            {label}
          </button>
        ))}
      </div>
      {state === "correct" && (
        <p className="step4-page__feedback step4-page__feedback--correct">
          {correctFeedback}
        </p>
      )}
      {state === "incorrect" && (
        <p className="step4-page__feedback step4-page__feedback--incorrect">
          {incorrectFeedback}
        </p>
      )}
    </div>
  );
}

const LAYER_CHOICES: { value: QuizChoice; label: string }[] = [
  { value: "A", label: "A. 비즈니스 로직" },
  { value: "B", label: "B. 주요 기능 함수" },
  { value: "C", label: "C. 유틸 함수" },
  { value: "D", label: "D. 기본 JS 기능" },
];

function Step4Page() {
  const navigate = useNavigate();
  const {
    code,
    testResult,
    hintOpen,
    q2Unlocked,
    q2Selected,
    q2State,
    q3Unlocked,
    q3Selected,
    q3State,
    allDone,
    handleCodeChange,
    handleRunTest,
    handleHintToggle,
    handleQ2Select,
    handleQ3Select,
  } = useStep4();

  return (
    <main className="step4-page">
      <StepHeader step={4} title="계층 설계하기" />
      <div className="step4-page__body">
        {/* Quiz Panel */}
        <div className="step4-page__quiz-panel">
          {/* Q1 */}
          <div className="step4-page__question-block">
            <p className="step4-page__question-number">Q1</p>
            <p className="step4-page__question-text">
              <code>calculateTotalPrice</code>와 <code>calculateTotalKcal</code>
              두 함수의 중복 로직을 추상화해보세요!
            </p>
            <p className="step4-page__question-sub">
              <code>calculateTotalPrice</code>와 <code>calculateTotalKcal</code>
              는 동일한 반복 구조를 가지고 있어요.
              <br />
              이를 <code>sum(items, property)</code> 함수로 추출해보세요.
            </p>
            <button
              className="step4-page__hint-toggle"
              onClick={handleHintToggle}
            >
              {hintOpen ? "▲ 힌트 닫기" : "▼ 힌트 보기"}
            </button>
            {hintOpen && (
              <p className="step4-page__hint-content">
                두 함수가 하는 일의 목표(도메인)는 다르지만, 내부 동작은
                유사해요. 그렇다면
                <br />
                주석으로 표시된 부분을 잘 읽어보세요!
              </p>
            )}
          </div>

          {q2Unlocked && (
            <>
              <div className="step4-page__divider-h" />
              <QuizSection
                questionNumber="Q2"
                questionText="이렇게 만든 sum 함수는 어느 계층에 속할까요?"
                choices={LAYER_CHOICES}
                selected={q2Selected}
                state={q2State}
                onSelect={handleQ2Select}
                correctFeedback="정답입니다! sum은 특정 도메인 지식 없이도 쓸 수 있는 유틸 함수예요."
                incorrectFeedback="sum은 어떤 도메인에도 종속되지 않고 재사용 가능한 함수예요. 다시 생각해보세요!"
              />
            </>
          )}

          {q3Unlocked && (
            <>
              <div className="step4-page__divider-h" />
              <QuizSection
                questionNumber="Q3"
                questionText="calculateTotalPrice / calculateTotalKcal 함수는 어느 계층에 속할까요?"
                choices={LAYER_CHOICES}
                selected={q3Selected}
                state={q3State}
                onSelect={handleQ3Select}
                correctFeedback="정답입니다! 이 함수들은 주문 도메인 지식을 가진 주요 기능 함수예요."
                incorrectFeedback="price, kcal이라는 도메인 속성을 직접 다루는 함수예요. 다시 생각해보세요!"
              />
            </>
          )}
        </div>

        {/* Code Panel */}
        <div className="step4-page__code-panel">
          <div className="step4-page__panel-header">
            <p className="step4-page__panel-title">코드 에디터</p>
          </div>

          <div className="step4-page__readonly-blocks">
            <div className="step4-page__readonly-block">
              <p className="step4-page__readonly-label">참고 (읽기 전용)</p>
              <pre className="step4-page__readonly-code">
                {CALCULATE_TOTAL_PRICE_CODE}
              </pre>
            </div>
            <div className="step4-page__readonly-block">
              <p className="step4-page__readonly-label">참고 (읽기 전용)</p>
              <pre className="step4-page__readonly-code">
                {CALCULATE_TOTAL_KCAL_CODE}
              </pre>
            </div>
          </div>

          <div className="step4-page__editor-wrapper">
            <textarea
              className="step4-page__textarea"
              value={code}
              onChange={(e) => handleCodeChange(e.target.value)}
              spellCheck={false}
            />
          </div>

          {allDone && (
            <div className="step4-page__next-banner">
              <p>
                계층 설계를 완료했습니다! 지금까지 나눈 계층을 확인해볼까요?
              </p>
              <button
                className="step4-page__next-button"
                onClick={() => navigate("/step5")}
              >
                다음 단계 →
              </button>
            </div>
          )}

          <div className="step4-page__code-footer">
            <button className="step4-page__run-button" onClick={handleRunTest}>
              ▶ 테스트 실행
            </button>
            {testResult !== null && (
              <p
                className={`step4-page__test-result step4-page__test-result--${testResult.passed ? "passed" : "failed"}`}
              >
                {testResult.passed ? "✅" : "❌"} {testResult.message}
              </p>
            )}
          </div>
        </div>

        {/* Hierarchy Panel */}
        <div className="step4-page__hierarchy-panel">
          <div className="step4-page__panel-header">
            <p className="step4-page__panel-title">코드 계층</p>
          </div>
          <div className="step4-page__hierarchy-body">
            <div className="step4-page__hierarchy-layer step4-page__hierarchy-layer--business">
              <p className="step4-page__hierarchy-layer-name">비즈니스 로직</p>
              <p className="step4-page__hierarchy-layer-desc">
                도메인 규칙과 흐름을 조율하는 최상위 계층
              </p>
              <div className="step4-page__hierarchy-layer-examples">
                <Highlight theme={themes.vsDark} code={PROCESS_ORDER_CODE} language="javascript">
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className={`step4-page__readonly-code ${className}`}
                      style={{
                        ...style,
                        fontSize: "12px",
                        padding: "12px",
                        overflowX: "auto",
                        textAlign: "left",
                        margin: "0",
                      }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>

            <div className="step4-page__hierarchy-layer step4-page__hierarchy-layer--main">
              <p className="step4-page__hierarchy-layer-name">주요 기능 함수</p>
              <p className="step4-page__hierarchy-layer-desc">
                특정 도메인 지식을 가진 기능 단위 함수
              </p>
              <div className="step4-page__hierarchy-layer-examples">
                <span className="step4-page__hierarchy-fn">
                  calculateTotalPrice()
                </span>
                <span className="step4-page__hierarchy-fn">
                  calculateTotalKcal()
                </span>
                <span className="step4-page__hierarchy-fn">
                  getOrderedItems()
                </span>
              </div>
            </div>

            <div className="step4-page__hierarchy-layer step4-page__hierarchy-layer--util">
              <p className="step4-page__hierarchy-layer-name">유틸 함수</p>
              <p className="step4-page__hierarchy-layer-desc">
                도메인에 종속되지 않고 재사용 가능한 함수
              </p>
              <div className="step4-page__hierarchy-layer-examples">
                <span className="step4-page__hierarchy-fn step4-page__hierarchy-fn--highlight">
                  sum(items, property)
                </span>
              </div>
            </div>

            <div className="step4-page__hierarchy-layer step4-page__hierarchy-layer--base">
              <p className="step4-page__hierarchy-layer-name">기본 JS 기능</p>
              <p className="step4-page__hierarchy-layer-desc">
                언어에서 기본 제공하는 내장 기능
              </p>
              <div className="step4-page__hierarchy-layer-examples">
                <span className="step4-page__hierarchy-fn">Array.filter()</span>
                <span className="step4-page__hierarchy-fn">for loop</span>
                <span className="step4-page__hierarchy-fn">Math.floor()</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Step4Page;
