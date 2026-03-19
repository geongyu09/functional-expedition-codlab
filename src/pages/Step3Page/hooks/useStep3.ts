import { useState } from "react";
import { INITIAL_CODE, TEST_MENU_LIST, TEST_EXPECTED, TEST_INPUT } from "../data";
import type { MenuItem } from "../data";
import type { Q1State, TestResult } from "../types";

type Q1Choice = "action" | "calculation";

const CORRECT_Q1_ANSWER: Q1Choice = "action";

function compareMenuItems(a: MenuItem, b: MenuItem): boolean {
  return a.name === b.name && a.price === b.price && a.kcal === b.kcal;
}

function validateTestResult(result: unknown): TestResult {
  if (!Array.isArray(result)) {
    return { passed: false, message: "반환값이 배열이 아닙니다." };
  }

  if (result.length !== TEST_EXPECTED.length) {
    return {
      passed: false,
      message: `배열 길이가 다릅니다. 기댓값: ${TEST_EXPECTED.length}, 실제값: ${result.length}`,
    };
  }

  for (let i = 0; i < TEST_EXPECTED.length; i++) {
    const actual = result[i] as MenuItem;
    const expected = TEST_EXPECTED[i];

    if (!compareMenuItems(actual, expected)) {
      return {
        passed: false,
        message: `${i + 1}번째 항목이 다릅니다. 기댓값: ${expected.name}, 실제값: ${actual?.name ?? "없음"}`,
      };
    }
  }

  return { passed: true, message: "테스트 통과! 함수가 올바르게 동작합니다." };
}

function runUserCode(userCode: string): TestResult {
  const menuListJson = JSON.stringify(TEST_MENU_LIST);
  const targetMenusJson = JSON.stringify(TEST_INPUT);

  const signatures = [
    `getOrderedItems(${menuListJson}, ${targetMenusJson})`,
    `getOrderedItems(${targetMenusJson}, ${menuListJson})`,
  ];

  let lastError: string | null = null;

  for (const call of signatures) {
    try {
      const fnWrapper = new Function(`
        ${userCode}
        return ${call};
      `);
      const result: unknown = fnWrapper();
      const testResult = validateTestResult(result);
      if (testResult.passed) return testResult;
      lastError = testResult.message;
    } catch (error) {
      lastError =
        error instanceof Error
          ? `오류 발생: ${error.message}`
          : "알 수 없는 오류가 발생했습니다.";
    }
  }

  return { passed: false, message: lastError ?? "테스트 실패" };
}

interface UseStep3Return {
  q1Selected: Q1Choice | null;
  q1State: Q1State;
  q2Unlocked: boolean;
  code: string;
  testResult: TestResult | null;
  handleQ1Select: (choice: Q1Choice) => void;
  handleCodeChange: (code: string) => void;
  handleRunTest: () => void;
}

function useStep3(): UseStep3Return {
  const [q1Selected, setQ1Selected] = useState<Q1Choice | null>(null);
  const [q1State, setQ1State] = useState<Q1State>("idle");
  const [q2Unlocked, setQ2Unlocked] = useState(false);
  const [code, setCode] = useState(INITIAL_CODE);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleQ1Select = (choice: Q1Choice): void => {
    if (q1State === "correct") return;

    setQ1Selected(choice);

    if (choice === CORRECT_Q1_ANSWER) {
      setQ1State("correct");
      setQ2Unlocked(true);
    } else {
      setQ1State("incorrect");
    }
  };

  const handleCodeChange = (newCode: string): void => {
    setCode(newCode);
    setTestResult(null);
  };

  const handleRunTest = (): void => {
    const result = runUserCode(code);
    setTestResult(result);
  };

  return {
    q1Selected,
    q1State,
    q2Unlocked,
    code,
    testResult,
    handleQ1Select,
    handleCodeChange,
    handleRunTest,
  };
}

export default useStep3;
