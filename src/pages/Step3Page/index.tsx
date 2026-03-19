import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Highlight, themes } from "prism-react-renderer";
import Editor from "react-simple-code-editor";
import StepHeader from "../Step1Page/components/StepHeader";
import useStep3 from "./hooks/useStep3";
import { FULL_CODE_LINES, TEST_CODE } from "./data";
import "./Step3Page.css";

const fullCodeString = FULL_CODE_LINES.map((line) => line.content).join("\n");

const highlightCode = (code: string) => (
  <Highlight theme={themes.vsDark} code={code} language="javascript">
    {({ tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </>
    )}
  </Highlight>
);

type ActiveTab = "test" | "code";

function Step3Page() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>("code");
  const {
    q1Selected,
    q1State,
    q2Unlocked,
    code,
    testResult,
    hintOpen,
    handleQ1Select,
    handleCodeChange,
    handleRunTest,
    handleHintToggle,
  } = useStep3();

  const q1ButtonClass = (choice: "action" | "calculation"): string => {
    const base = "step3-page__choice-button";
    if (q1Selected !== choice) return base;
    if (q1State === "correct") return `${base} ${base}--selected-correct`;
    if (q1State === "incorrect") return `${base} ${base}--selected-incorrect`;
    return base;
  };

  return (
    <main className="step3-page">
      <StepHeader step={3} title="액션을 계산으로 만들기" />
      <div className="step3-page__body">
        {/* Quiz Panel */}
        <div className="step3-page__quiz-panel">
          <div className="step3-page__question-block">
            <p className="step3-page__question-number">Q1</p>
            <p className="step3-page__question-text">
              다음 함수 <code>getOrderedItems</code>는 액션과 계산 중 무엇에 더
              가까울까요?
            </p>
            <div className="step3-page__choices">
              <button
                className={q1ButtonClass("action")}
                onClick={() => handleQ1Select("action")}
                disabled={q1State === "correct"}
              >
                🔥 액션
              </button>
              <button
                className={q1ButtonClass("calculation")}
                onClick={() => handleQ1Select("calculation")}
                disabled={q1State === "correct"}
              >
                🧮 계산
              </button>
            </div>
            {q1State === "correct" && (
              <p className="step3-page__feedback step3-page__feedback--correct">
                정답입니다! 전역 변수를 매개변수로 받아 계산으로 만들어봐요.
              </p>
            )}
            {q1State === "incorrect" && (
              <p className="step3-page__feedback step3-page__feedback--incorrect">
                현재 이 함수는 전역 변수 <code>menuList</code>를 참조하는
                액션이에요. 계산으로 바꾸는 것이 목표입니다!
              </p>
            )}
          </div>

          {q2Unlocked && (
            <>
              <div className="step3-page__divider-h" />
              <div className="step3-page__q2-block">
                <p className="step3-page__question-number">Q2</p>
                <p className="step3-page__question-text">
                  이 함수를 계산으로 만들어보세요! 코드 에디터 탭에서 코드를
                  수정할 수 있어요.
                </p>
                <button
                  className="step3-page__hint-toggle"
                  onClick={handleHintToggle}
                >
                  {hintOpen ? "▲ 힌트 닫기" : "▼ 힌트 보기"}
                </button>
                {hintOpen && (
                  <p className="step3-page__hint-content">
                    핵심은 암묵적 입력에 있어요! <br />
                    <code>암묵적 입력</code>
                    이란 함수 내부에서 직접 참조하는 외부 상태를 의미해요.
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Code Panel */}
        <div className="step3-page__code-panel">
          <div className="step3-page__panel-header">
            <div className="step3-page__tabs">
              <button
                className={`step3-page__tab ${activeTab === "code" ? "step3-page__tab--active" : ""}`}
                onClick={() => setActiveTab("code")}
                disabled={!q2Unlocked}
              >
                코드 에디터
              </button>
              <button
                className={`step3-page__tab ${activeTab === "test" ? "step3-page__tab--active" : ""}`}
                onClick={() => setActiveTab("test")}
                disabled={!q2Unlocked}
              >
                테스트 코드
              </button>
            </div>
          </div>
          <div className="step3-page__textarea-wrapper">
            {activeTab === "test" ? (
              <Editor
                value={TEST_CODE}
                onValueChange={() => {}}
                highlight={highlightCode}
                padding={20}
                readOnly
                className="step3-page__textarea step3-page__textarea--readonly"
                style={{
                  fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
                  fontSize: 14,
                }}
              />
            ) : (
              <Editor
                value={code}
                onValueChange={(newCode) => handleCodeChange(newCode)}
                highlight={highlightCode}
                padding={20}
                disabled={!q2Unlocked}
                className="step3-page__textarea"
                style={{
                  fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
                  fontSize: 14,
                }}
              />
            )}
          </div>
          {testResult?.passed && (
            <div className="step3-page__next-banner">
              <p>계산 함수로 만들었습니다!</p>
              <button
                className="step3-page__next-button"
                onClick={() => navigate("/step4")}
              >
                다음 단계 →
              </button>
            </div>
          )}
          <div className="step3-page__code-footer">
            <button
              className="step3-page__run-button"
              onClick={handleRunTest}
              disabled={!q2Unlocked}
            >
              ▶ 테스트 실행
            </button>
            {testResult !== null && (
              <p
                className={`step3-page__test-result step3-page__test-result--${testResult.passed ? "passed" : "failed"}`}
              >
                {testResult.passed ? "✅" : "❌"} {testResult.message}
              </p>
            )}
          </div>
        </div>

        {/* Full Code Panel */}
        <div className="step3-page__full-code-panel">
          <div className="step3-page__panel-header">
            <p className="step3-page__panel-title">전체 코드 참고</p>
          </div>
          <div className="step3-page__full-code-lines">
            <Highlight
              theme={themes.vsDark}
              code={fullCodeString}
              language="javascript"
            >
              {({ tokens, getTokenProps }) => (
                <>
                  {tokens.map((tokenLine, i) => {
                    const lineData = FULL_CODE_LINES[i];
                    if (!lineData) return null;
                    return (
                      <div
                        key={lineData.lineNumber}
                        className={`step3-page__code-line step3-page__code-line--${lineData.type}`}
                      >
                        <span className="step3-page__line-number">
                          {lineData.lineNumber}
                        </span>
                        <span className="step3-page__line-content">
                          {tokenLine.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    );
                  })}
                </>
              )}
            </Highlight>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Step3Page;
